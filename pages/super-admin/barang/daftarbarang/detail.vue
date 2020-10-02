<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Detail",
    };
  },
  data() {
    return {
      title: "Daftar Barang",
      items: [
        {
          text: "Barang",
        },
        {
          text: "Daftar Barang",
        },
        {
          text: "Detail",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td>H2PLANT</td>
          </tr>
          <tr>
            <td class="table-secondary">Merk</td>
            <td>Datsun</td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td>CV.ALFAGHA</td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td>Admin Balongan</td>
          </tr>
          <tr>
            <td class="table-secondary">Keterangan</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Model</td>
            <td>z54</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal awal berlaku</td>
            <td>2020-04-23</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal akhir berlaku</td>
            <td>2020-04-30</td>
          </tr>
          <tr>
            <td class="table-secondary">Safetyman</td>
            <td>Paijo</td>
          </tr>
          <tr>
            <td class="table-secondary">Pemeriksa</td>
            <td>Paijo</td>
          </tr>
        </table>
      </div>

      <div class="col-12">
        <button class="btn btn-danger">Kembali</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 20%;
}

table{
  border-top: 3px solid #4C8EC4;
  border-radius: 10px;
}

.table-secondary{
  background-color: #E7E5E7;
}

th,td { 
  border: 1px solid #D5D3D5!important 
} 
</style>