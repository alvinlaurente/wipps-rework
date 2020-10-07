<script>
export default {
  head() {
    return {
      title: "Detail Riwayat Pengguna"
    };
  },
  data() {
    return {
      title: "Detail Riwayat Pengguna",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Riwayat Pengguna"
        },
        {
          text: "Detail Riwayat Pengguna",
          active: true
        }
      ]
    };
  },
  methods: {}
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- dashboard>riwayat pengguna>detail -->
    <div class="row">
      <!-- Table -->
      <div class="col-12">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pekerjaan</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Judul</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Equipment</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Persen</td>
            <td></td>
          </tr>
        </table>
      </div>
      <!-- End Table -->

      <!-- Accordion -->
      <div class="col-12 mb-3">
        <div class="accordion p-0" role="tablist">
          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="text-left"
                >► &nbsp; Pekerja yang berada di area kerja memahami prosedur
                kerja yang akan dilakukan dan mengetahui kondisi bahaya yang
                akan timbul di area kerja</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <div class="mb-3"><b>Status</b> : Unsafe</div>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      disabled
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-2
                variant="light"
                class="text-left"
                >► &nbsp;</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-3
                variant="light"
                class="text-left"
                >► &nbsp;</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <!-- End Accordion -->

      <div class="col-12">
        <div class="form-group">
          <div>
            <button type="reset" class="btn btn-danger" v-on:click="back">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End dashboard>riwayat pengguna>detail -->

    <!-- Dashboard>overall percentage>detail -->
    <div class="row">
      <!-- Buttons -->
      <div class="col-12">
        <div class="form-group">
          <div>
            <button type="reset" class="btn btn-danger" v-on:click="back">
              Kembali
            </button>
            <button
              type="submit"
              class="btn btn-success m-l-5 ml-1"
              @click="back"
            >
              Riwayat
            </button>
          </div>
        </div>
      </div>
      <!-- End Buttons -->

      <div class="col-12 mb-3">
        <h4>PAKAIAN KERJA</h4>
        <b-list-group>
          <b-list-group-item
            >Cras justo odio
            <span
              ><b-badge variant="success">96.55%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Dapibus ac facilisis in
            <span
              ><b-badge variant="success">98.14%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Morbi leo risus
            <span
              ><b-badge variant="success">91.22%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Porta ac consectetur ac
            <span
              ><b-badge variant="warning">77.77%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Porta ac consectetur ac
            <span
              ><b-badge variant="danger">30.77%</b-badge></span
            ></b-list-group-item
          >
        </b-list-group>
      </div>

      <div class="col-12 mb-3">
        <h4>PAKAIAN KERJA</h4>
        <b-list-group>
          <b-list-group-item
            >Cras justo odio
            <span
              ><b-badge variant="success">96.55%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Dapibus ac facilisis in
            <span
              ><b-badge variant="success">98.14%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Morbi leo risus
            <span
              ><b-badge variant="success">91.22%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Porta ac consectetur ac
            <span
              ><b-badge variant="warning">77.77%</b-badge></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Porta ac consectetur ac
            <span
              ><b-badge variant="danger">30.77%</b-badge></span
            ></b-list-group-item
          >
        </b-list-group>
      </div>
    </div>
    <!-- End Dashboard>overall percentage>detail -->

    <!-- Dashboard>overall percentage>pengguna -->
    <!-- Button -->
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <div>
            <button type="reset" class="btn btn-danger" v-on:click="back">
              Kembali
            </button>
          </div>
        </div>
      </div>
      <!-- End Button -->

      <!-- Cards - Ngambil dari input-barang.vue jadi ga nampak -->
      <div class="row">
        <div class="col-4">
          <div class="card cursor-pointer">
            <div class="card-body">
              <h4 class="mb-0"></h4>
              <p class="text-muted mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Dashboard>overall percentage>pengguna -->

    <!-- Dashboard>overall percentage>pengguna>riwayat pengguna -->
    <div class="row mb-3">
      <!-- Button and Search -->
      <div class="col-6">
        <div class="form-group">
          <div>
            <button type="reset" class="btn btn-danger m-l-5" @click="back">
              Kembali
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div id="tickets-table_filter" class="dataTables_filter text-right">
          <label class="d-inline-flex align-items-center">
            Search:
            <b-form-input
              v-model="filter"
              type="search"
              placeholder="Search..."
              class="form-control form-control ml-2"
            ></b-form-input>
          </label>
        </div>
      </div>
    </div>

    <!-- Table ngambil dari table/_id.vue -->
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
          <a
            href="javascript:void(0);"
            class="px-2 text-success"
            v-b-tooltip.hover
            title="Lihat"
          >
            <i class="uil uil-eye font-size-18"></i>
          </a>
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
    <!-- End Button -->

    <!-- End Dashboard>overall percentage>pengguna>riwayat pengguna -->
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 20%;
}

table {
  border-top: 3px solid #2185d0;
  border-radius: 10px; /* Yang ini ga jalan gatau kenapa */
}

.table-secondary {
  background-color: #e7e5e7;
}

th,
td {
  border: 1px solid #d5d3d5 !important;
}

.accordion {
  border: 2px solid #d5d3d5;
  border-radius: 10px;
}

.accordion .card {
  border-bottom: 1px solid #d5d3d5;
}

.list-group-item span {
  float: right;
}
</style>
