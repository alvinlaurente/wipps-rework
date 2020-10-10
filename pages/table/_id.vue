<script>
/**
 * Customer component
 */
import QRCode from "qrcode";
import NoData from "@/components/NoData";

export default {
  components: {NoData},
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
          text: "Table",
        },
        {
          text: this.$route.params.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          active: true,
        },
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
      fields: this.getColumn(),
      selectedDelete: ""
    };
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    removeUneeded() {
      let notNeededElement = document.getElementsByClassName(
        "not-" + this.$route.params.id
      );
      if (notNeededElement) {
        for (let i = 0; i < notNeededElement.length; i++) {
          notNeededElement[i].style.display = "none";
          notNeededElement[i].innerHTML = "";
        }
      }
    },
    showInspeksi(id, data) {
      localStorage.setItem("tmp_barcode", id);
      localStorage.setItem("selected-data-barang", JSON.stringify(data));
      this.$router.push("/barang/daftar-barang/daftar-riwayat-inspeksi-barang");
    },
    getEndpoint() {
      switch (this.$route.params.id) {
        case "daftar-barang":
          return "item-inspections";
        case "judul":
          return "form-types";
        case "barang":
          return "items";
        case "area":
          return "areas";
        case "pekerjaan":
          return "jobs";
        case "pelaksana-pekerjaan":
          return "companies";
        case "pengguna":
          return "users";
      }
    },
    getColumn() {
      switch (this.$route.params.id) {
        case "daftar-barang":
          return [
            {
              key: "No",
              thStyle: { width: "60px" },
            },
            {
              key: "model",
              label: "Model",
              sortable: true,
            },
            {
              key: "brand",
              label: "Merk",
              sortable: true,
            },
            {
              key: "aksi-barang",
              label: "Aksi",
              thStyle: { width: "100px" },
            },
          ];
        case "judul":
        case "barang":
        case "area":
        case "pekerjaan":
          return [
            {
              key: "No",
              thStyle: { width: "60px" },
            },
            {
              key: "name",
              label: "Nama",
              sortable: true,
            },
            {
              key: "Aksi",
              thStyle: { width: "140px" },
            },
          ];
        case "pelaksana-pekerjaan":
          return [
            {
              key: "No",
              thStyle: { width: "60px" },
            },
            {
              key: "name",
              label: "Nama",
              sortable: true,
            },
            {
              key: "type",
              label: "Jenis",
              sortable: true,
            },
            {
              key: "Aksi",
              thStyle: { width: "140px" },
            },
          ];
        case "pengguna":
          return [
            {
              key: "No",
              thStyle: { width: "60px" },
            },
            {
              key: "name",
              label: "Nama",
              sortable: true,
            },
            {
              key: "username",
              label: "Username",
              sortable: true,
            },
            {
              key: "email",
              label: "Email",
              sortable: true,
            },
            {
              key: "Aksi",
              thStyle: { width: "140px" },
            },
          ];
      }
    },
    showBarcode(barcode) {
      this.$root.$emit("bv::show::modal", "modal", "#btnShow");
      QRCode.toDataURL(process.env.baseUrl + "/barcode/" + barcode, {
        width: 1000,
      }).then((url) => {
        console.log(url);
        document.getElementById(
          "barcode-image"
        ).style.backgroundImage = `url(${url})`;
        document.getElementById("downloadBarcode").href = url;
        document.getElementById("downloadBarcode").download = barcode;
      });
    },
    async loadData() {
      let url = process.env.baseUrl;
      url +=
        `/` +
        this.getEndpoint() +
        `?search[value]=&start=0&length=2000&order[0][column]=0&order[0][dir]=asc` +
        `&to=` +
        `2020` +
        `-12-31` +
        `&from=` +
        `2020` +
        `-01-01`;
      await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("noTableDataText").innerText = "Tidak Ada Data"
        this.tableItem = result.data;
        console.log(this.tableItem);
      });
    },
    edit(data) {
      localStorage.setItem("slug-edit", data.slug);
      this.$router.push("/form/referensi/edit/" + this.$route.params.id);
    },
    deleteData(slug) {
      this.selectedDelete = slug
      this.$refs['modal-delete'].show()
    },
    btnDelete() {
      fetch( process.env.baseUrl + `/` + this.getEndpoint() + `/` + this.selectedDelete, {
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
          this.$refs['modal-delete'].hide()
          this.loadData()
        })
        .catch(error => {
          alert(error)
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
    if ((this.$route.params.id==="daftar-barang"&&['ru2','ru4','ru5'].includes(localStorage.getItem("ru")))
      ||this.$route.params.id!=="daftar-barang"&&['safety-man','safety-inspector','supervisor'].includes(localStorage.getItem("role"))){
      this.$router.push({
        path: "/",
      });
    }
    this.$activateMenuDropdown(this.items[1].text);
    document.getElementById("btn-tambah").innerText = "Tambah " + this.title;
    this.removeUneeded();
    this.loadData();
    this.totalRows = this.items.length;
  },
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <b-modal ref="modal-delete" id="modal-delete" centered title="Yakin ingin menghapus?" hide-footer>
      <b-button variant="danger" class="float-right" @click="btnDelete">Hapus</b-button>
    </b-modal>
    <b-modal id="modal" centered title="Barcode">
      <div id="barcode-image"></div>
      <template v-slot:modal-footer>
        <a class="w-100" id="downloadBarcode" href="#"
          ><b-button variant="primary" class="float-right"
            >Download</b-button
          ></a
        >
      </template>
    </b-modal>
    <div class="row">
      <div class="col-6">
        <nuxt-link
          class="btn btn-success not-daftar-barang"
          id="btn-tambah"
          :to="'/form/referensi/' + this.$route.params.id"
        ></nuxt-link>
      </div>
      <div class="col-12">
        <div class="row mt-4">
          <div class="col-sm-12 col-md-6">
            <div id="tickets-table_length" class="dataTables_length">
              <label class="d-inline-flex align-items-center">
                Show&nbsp;
                <b-form-select
                  v-model="perPage"
                  size="sm"
                  :options="pageOptions"
                ></b-form-select
                >&nbsp;entries
              </label>
            </div>
          </div>
          <!-- Search -->
          <div class="col-sm-12 col-md-6">
            <div
              id="tickets-table_filter"
              class="dataTables_filter text-md-right"
            >
              <label class="d-inline-flex align-items-center">
                Search:
                <b-form-input
                  v-model="filter"
                  type="search"
                  placeholder="Search..."
                  class="form-control form-control-sm ml-2"
                ></b-form-input>
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
                :to="'/detail/' + $route.params.id + '/' + data.item.slug"
                class="px-2 text-success"
                v-b-tooltip.hover
                title="Lihat"
              >
                <i class="uil uil-eye font-size-18"></i>
              </nuxt-link>
              <a
                href="javascript:void(0);"
                class="px-2 text-primary"
                v-b-tooltip.hover
                @click="edit(data.item)"
                title="Ubah"
              >
                <i class="uil uil-pen font-size-18"></i>
              </a>
              <a
                href="javascript:void(0);"
                class="px-2 text-danger"
                v-b-tooltip.hover
                @click="deleteData(data.item.slug)"
                title="Hapus"
              >
                <i class="uil uil-trash-alt font-size-18"></i>
              </a>
            </template>
            <template v-slot:cell(aksi-barang)="data">
              <a
                href="javascript:void(0);"
                @click="showInspeksi(data.item.barcode, data.item)"
                class="px-2 text-success"
                v-b-tooltip.hover
                title="Lihat"
              >
                <i class="uil uil-eye font-size-18"></i>
              </a>
              <a
                class="px-2 text-danger"
                v-b-tooltip.hover
                @click="showBarcode(data.item.barcode)"
                title="Barcode"
              >
                <i class="fas fa-qrcode cursor-pointer"></i>
              </a>
            </template>
          </b-table>
          <NoData v-if="tableItem.length===0"/>
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
  </div>
</template>

<style>
.table-head {
  background-color: #ff0000 !important;
  color: white;
}
#barcode-image {
  width: 100%;
  padding-top: 100%;
  background-size: cover;
}
</style>
