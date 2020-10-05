<script>
import QRCode from "qrcode";

/**
 * Customer component
 */
export default {
  head() {
    return {
      title: "Daftar Riwayat Inspeksi Barang",
    };
  },
  data() {
    return {
      title: "Daftar Riwayat Inspeksi Barang",
      items: [
        {
          text: "Barang",
        },
        {
          text: "Daftar Barang"
        },
        {
          text: "Daftar Riwayat Inspeksi Barang",
          active:true
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
      fields: [
        {
          key: "No",
          thStyle: { 'width': '60px'}
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
          key: "aksi",
          label: "Aksi",
          thStyle: { 'width': '140px'}
        }
      ],
    };
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
    this.$activateMenuDropdown("Daftar Barang")
    this.loadData()
    this.totalRows = this.items.length;
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
    showBarcode(barcode) {
      this.$root.$emit('bv::show::modal', 'modal', '#btnShow')
      QRCode.toDataURL(process.env.baseUrl+"/barcode/"+barcode,{
        width:1000
      }).then(url => {
        console.log(url)
        document.getElementById('barcode-image').style.backgroundImage = `url(${url})`
      })
    },
    show(slug) {
      localStorage.setItem("selected-id-inspeksi", slug)
      this.$router.push('/barang/daftar-barang/detail')
    },
    async loadData() {
      let url = process.env.baseUrl
      url += `/barcode-item-inspections?search[value]=&start=0&length=2000&order[0][column]=0&order[0][dir]=asc&barcode=` +
        localStorage.getItem("tmp_barcode")
      await fetch( url , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
        .then(response => response.json())
        .then(result => {
          this.tableItem = result.data
        })
    },
  },
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <b-modal id="modal" centered title="Barcode">
      <div id="barcode-image"></div>
    </b-modal>
    <div class="row">
      <div class="col-6">
        <nuxt-link class="btn btn-success" to="/barang/daftar-barang/daftar-riwayat-inspeksi-barang/inspeksi-ulang">Inspeksi Ulang</nuxt-link>
        <nuxt-link class="btn btn-danger" to="/table/daftar-barang">Kembali</nuxt-link>
      </div>
      <div class="col-12">
        <div class="row mt-4">
          <div class="col-sm-12 col-md-6">
            <div id="tickets-table_length" class="dataTables_length">
              <label class="d-inline-flex align-items-center">
                Show&nbsp;
                <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
              </label>
            </div>
          </div>
          <!-- Search -->
          <div class="col-sm-12 col-md-6">
            <div id="tickets-table_filter" class="dataTables_filter text-md-right">
              <label class="d-inline-flex align-items-center">
                Search:
                <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
              </label>
            </div>
          </div>
          <!-- End search -->
        </div>
        <!-- Table -->
        <div class="table-responsive mb-0">
          <b-table table-class="table table-centered datatable table-card-list" thead-tr-class="table-head" :items="tableItem" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
            <template v-slot:cell(no)="data">{{ (perPage*(currentPage-1))+(data.index+1) }}</template>
            <template v-slot:cell(aksi)="data">
              <a href="javascript:void(0);" class="px-2 text-success" @click="show(data.item.slug)" v-b-tooltip.hover title="Lihat">
                <i class="uil uil-eye font-size-18"></i>
              </a>
              <a href="javascript:void(0);" class="px-2 text-primary" v-b-tooltip.hover title="Ubah">
                <i class="uil uil-pen font-size-18"></i>
              </a>
              <a class="px-2 text-danger" v-b-tooltip.hover @click="showBarcode(data.item.barcode)" title="Barcode">
                <i class="fas fa-qrcode"></i>
              </a>
            </template>
          </b-table>
        </div>
        <div class="row">
          <div class="col">
            <div class="dataTables_paginate paging_simple_numbers float-right">
              <ul class="pagination pagination-rounded">
                <!-- pagination -->
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.table-head{
  background-color: #C83E4D !important;
  color: white;
}
</style>
