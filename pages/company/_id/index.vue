<script>
import NoData from "@/components/NoData";
import LoadingTable from "@/components/LoadingTable";
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {NoData, LoadingTable, InsideLoading},
  head() {
    return {
      title: "Riwayat Inspeksi Pelaksana Pekerjaan",
    };
  },
  data() {
    return {
      title: "Riwayat Inspeksi Pelaksana Pekerjaan",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Complete Dashboard",
        },
        {
          text: "Riwayat Inspeksi Pelaksana Pekerjaan",
          active: true,
        },
      ],
      value: {
        value1: 59.27,
      },
      animate: true,
      dataChart: [],
      form: {
        cslr: null,
        checked: [],
      },
      cslrs: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      from: "2020-01-01",
      to: "2020-12-31",
      companyName: this.$route.params.id.split("-").join(" ").toUpperCase(),
      companySlug: this.$route.params.id,
      token: localStorage.getItem('token'),
      baseUrl: process.env.baseUrl,
      dataResume: [],
      tableItem: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,fields: [
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
          thStyle: { width: "120px" },
        },
      ],
      loadTableFlag: true,
      isLoading: false
    };
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    bgbar() {
      let els = document.getElementsByClassName("progress-bar");
      for (let i = 0; i < els.length; i++) {
        if (parseInt(els[i].innerHTML) < 33.33) {
          els[i].classList.add("bg-danger");
        } else if (parseInt(els[i].innerHTML) < 66.66) {
          els[i].classList.add("bg-warning");
        } else if (parseInt(els[i].innerHTML) <= 100) {
          els[i].classList.add("bg-success");
        }
      }
    },
    showAlert(text, type) {
      document.getElementById("alert-message").innerText = text;
      document.getElementById("alert-div").style.display = "block";
      document.getElementById("alert-div").classList.remove("alert-danger");
      document.getElementById("alert-div").classList.remove("alert-success");
      document.getElementById("alert-div").classList.add("alert-" + type);
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    },
    async loadData() {
      this.isLoading = true;
      this.loadTableFlag = true;
      this.dataResume = [];
      fetch( process.env.baseUrl + `/dashboard-v2/chart/companies-history?search[value]=&start=0&length=90000&order[0][column]=0&order[0][dir]=asc`+
        `&to=`+this.to+`&from=`+this.from+`&company=`+this.$route.params.id+`&form=`+document.getElementById("input-cslr").value, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then(result => {
        this.loadTableFlag = false;
        this.isLoading = false
        this.cslrs = result.dropdown
        this.dataResume = result.resume
        this.tableItem = result.data
        setTimeout(() => {this.bgbar()}, 1);
        console.log(result)
      })
      .catch(error => {
        this.loadTableFlag = false;
        this.isLoading = false
        this.showAlert(error, "danger")
      })
    },
    loadPdf(slug) {
      this.isLoading = true
      fetch(process.env.baseUrl + "/export/single", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          slug: slug
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading = false
        window.open(result)
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
  mounted: function () {
    this.$activateMenuDropdown(this.items[1].text);
    this.loadData();
  },
  middleware: ["authentication", "block-safety-man"],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading" />
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <span>Dari</span>
        <b-form-input type="date" v-model="from" @change="loadData"></b-form-input>
      </div>
      <div class="col-md-6">
        <span>Sampai</span>
        <b-form-input type="date" v-model="to" @change="loadData"></b-form-input>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <span>PT</span>
        <b-form-input id="" type="text" :placeholder="companyName" disabled></b-form-input>
      </div>
      <div class="col-md-6">
        <span>CSLR</span>
        <select id="input-cslr" class="form-control" aria-label="" @change="loadData">
          <option value="" selected>Semua CSLR</option>
          <option v-for="p in cslrs" :value="p.key">{{p.text}}</option>
        </select>
      </div>
    </div>

    <div class="row">
      <span class="col-12 font-weight-bold font-size-16">Resume:</span>
      <div class="col-12" v-for="d in dataResume">
        <span>{{d.name}}</span>
        <b-progress-bar class="mt-1 d-block" :value="d.percentage" :animated="animate" show-value :precision="2" height="3vw"></b-progress-bar>
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
          <nuxt-link :to="companySlug+'/'+data.item.slug" class="px-2 text-primary" v-b-tooltip.hover title="Lihat">
            <i class="uil uil-eye font-size-18"></i>
          </nuxt-link>
          <a class="px-2 text-success" v-b-tooltip.hover title="XLS" :href="baseUrl+'/export/single/excel?slug='+data.item.slug+'&token='+token">
            <i class="far fa-file-excel cursor-pointer"></i>
          </a>
          <a class="px-2 text-danger" v-b-tooltip.hover title="PDF" @click="loadPdf(data.item.slug)">
            <i class="far fa-file-pdf cursor-pointer"></i>
          </a>
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
</template>

<style scoped></style>

<style>
.card {
  border: 1px solid #d4d4d5;
}

.card-title {
  margin: 0;
}

footer.card-footer {
  text-align: center;
  font-weight: bold;
}

.table-head {
  background-color: #ff0000 !important;
  color: white;
}
</style>
