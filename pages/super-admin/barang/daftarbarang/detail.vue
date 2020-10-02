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
  mounted: function () {},
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tr>
            <td scope="row" class="table-secondary">Area</td>
            <td>H2PLANT</td>
          </tr>
          <tr>
            <td scope="row" class="table-secondary">Merk</td>
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
    </div>
  </div>
</template>

<style scoped>
  tr td:first-child {
    width: 20%;
  }

  .table-bordered{
    border: 1px solid black;
  }
</style>
