<script>
export default {
  head() {
    return {
      title: "Dashboard - Riwayat Pengguna"
    };
  },
  data() {
    return {
      title: "Riwayat Pengguna",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Riwayat Pengguna",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- Calendar -->
    <div class="row">
      <div class="col-6"><span>Dari</span></div>
      <div class="col-6"><span>Sampai</span></div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date">
          <span>Kolom ini tidak boleh kosong.</span>
        </div>
      </div>
      <div class="col-6">
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date">
          <span>Kolom ini tidak boleh kosong.</span>
        </div>
      </div>
    </div>
    <!-- End of Calendar -->

    <!-- Back button & Search -->
    <div class="row mb-3">
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
    <!-- End Back button & Search -->

    <!-- Table nyontek dari table > _id.vue -->
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
    <!-- End table -->

    <div class="row">
      <div class="col">
        <div class="dataTables_paginate paging_simple_numbers float-right">
          <ul class="pagination pagination-rounded">
            <!-- Pagination -->
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
