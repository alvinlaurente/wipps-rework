<script>
import NoData from "@/components/NoData";
import LoadingTable from "@/components/LoadingTable";
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {NoData, LoadingTable, InsideLoading},
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: this.$route.params.id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      items: [
        {
          text: "Overall Percentage"
        },
        {
          text: this.$route.params.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        },
        {
          text: this.$route.params.user
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          active: true,
        }
      ],
      tableItem: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      token: localStorage.getItem('token'),
      baseUrl: process.env.baseUrl,
      userSlug: this.$route.params.user,
      fields: [
        {
          key: "No",
          thStyle: { width: "60px" },
        },
        {
          key: "area",
          label: "Area",
          sortable: true,
        },
        {
          key: "company",
          label: "Pelaksana Pekerjaan",
          sortable: true,
        },
        {
          key: "job",
          label: "Pekerjaan",
          sortable: true,
        },
        {
          key: "form",
          label: "Judul",
          sortable: true,
        },
        {
          key: "aksi",
          label: "Aksi",
          thStyle: { width: "40px" },
        },
      ],
      loadTableFlag: true,
      isLoading: false
    };
  },
  methods: {
    showAlert(text, type) {
      document.getElementById("alert-message").innerText = text;
      document.getElementById("alert-div").style.display = "block";
      document.getElementById("alert-div").classList.remove("alert-danger");
      document.getElementById("alert-div").classList.remove("alert-success");
      document.getElementById("alert-div").classList.add("alert-"+type);
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async loadData() {
      this.tableItem = []
      this.loadTableFlag = true
      await fetch(process.env.baseUrl + "/forms-users?search[value]=&start=0&length=20000&order[0][column]=0&order[0][dir]=asc&user="
        +this.$route.params.user+"&form="+this.$route.params.id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.loadTableFlag = false;
        this.tableItem = result.data;
        console.log(this.tableItem);
      })
      .catch(error => {
        this.loadTableFlag = false
        this.showAlert(error, "danger")
      })
    },
    btnDelete() {
      this.tableItem = []
      this.isLoading = true
      fetch( process.env.baseUrl + `/overall-slug-user/` + this.selectedDelete, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }})
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json()
        })
        .then(result => {
          this.isLoading = false
          this.$refs['modal-delete'].hide()
          this.loadData()
        })
        .catch(error => {
          this.isLoading = false
          this.showAlert(error, "danger")
        })
    }
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableItem.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.$activateMenuDropdown("Overall Percentage");
    this.loadData();
    this.totalRows = this.items.length;
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="col-12">
      <div class="row mb-2">
        <div class="col-12">
          <nuxt-link to="pengguna" class="btn btn-danger">Kembali</nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 mt-1">
          <div id="tickets-table_length" class="dataTables_length">
            <label class="d-inline-flex align-items-center">Show&nbsp;
              <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
            </label>
          </div>
        </div>
        <!-- Search -->
        <div class="col-sm-12 col-md-6 mt-1">
          <div id="tickets-table_filter" class="dataTables_filter text-md-right">
            <label class="d-inline-flex align-items-center">Search:
              <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
            </label>
          </div>
        </div>
        <!-- End search -->
      </div>
      <!-- Table -->
      <div class="table-responsive mb-0">
        <b-table
          table-class="table table-centered datatable table-card-list"
          thead-tr-class="table-head"
          :items="tableItem"
          :fields="fields"
          responsive="sm"
          :per-page="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >
          <template v-slot:cell(no)="data">{{
              perPage * (currentPage - 1) + (data.index + 1)
            }}</template>
          <template v-slot:cell(aksi)="data">
            <nuxt-link
              :to="userSlug+'/'+data.item.slug"
              class="px-2 text-primary"
              v-b-tooltip.hover
              title="Lihat"
            >
              <i class="uil uil-eye font-size-18"></i>
            </nuxt-link>
          </template>
        </b-table>
        <NoData v-if="tableItem.length===0&&!loadTableFlag"/>
        <LoadingTable v-if="loadTableFlag"/>
      </div>
      <div class="row">
        <div class="col">
          <div class="dataTables_paginate paging_simple_numbers float-right">
            <ul class="pagination pagination-rounded">
              <!-- pagination -->
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
              ></b-pagination>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.table-head {
  background-color: #ff0000 !important;
  color: white;
}
</style>
