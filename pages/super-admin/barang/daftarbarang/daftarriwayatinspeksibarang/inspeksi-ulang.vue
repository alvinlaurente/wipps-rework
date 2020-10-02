<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Daftar Riwayat",
    };
  },
  data() {
    return {
      title: "Daftar Riwayat",
      items: [
        {
          text: "Barang",
        },
        {
          text: "Daftar Barang",
        },
        {
          text: "Daftar Riwayat Inspeksi Barang"
        },
        {
        text: "Daftar Riwayat",
          active: true
        }
      ],
    };
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
        <div class="col-12 mb-3">
            <label>Keterangan</label>
            <textarea class="form-control" rows="6" placeholder="Keterangan"></textarea>
        </div>
        <div class="col">
            <label>Tanggal awal berlaku</label>
            <input type="text" class="form-control"/>
        </div>

        <div class="col">
            <label>Tanggal akhir berlaku</label>
            <input type="text" class="form-control"/>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <button class="btn btn-success">Simpan</button>
            <button class="btn btn-danger">Batal</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>