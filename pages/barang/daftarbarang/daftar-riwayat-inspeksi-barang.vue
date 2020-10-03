<script>
/**
 * Dashboard component
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
    };
  },
  mounted: function () {},
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-6">
        <button class="btn btn-orange">Inspeksi Ulang</button>
        <button class="btn btn-danger">Kembali</button>
      </div>
      <div class="col-6">
        <form>
          <input type="search" class="form-control" placeholder="Cari"
          />
          <input type="submit" hidden/>
        </form>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-lg-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Area</th>
              <th scope="col">Pelaksanaan Pekerjaan</th>
              <th scope="col">Model</th>
              <th scope="col">Merk</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-light">
              <td>1</td>
              <td>H2PLANT</td>
              <td>CV.ALFAGHA</td>
              <td>z54</td>
              <td>datsun</td>
              <td>
                <button class="btn btn-primary btn-sm">asd</button>
                <button class="btn btn-warning btn-sm">asd</button>
                <button class="btn btn-success btn-sm">asd</button>
              </td>
            </tr>
            <tr class="table-light">
              <td>1</td>
              <td>H2PLANT</td>
              <td>CV.ALFAGHA</td>
              <td>z54</td>
              <td>datsun</td>
              <td>
                <button class="btn btn-primary btn-sm">asd</button>
                <button class="btn btn-warning btn-sm">asd</button>
                <button class="btn btn-success btn-sm">asd</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-1 mr-3">
        <nav aria-label="Navigation" class="d-inline">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <span class="page-link">&lt;</span>
            </li>
            <li class="page-item">
              <a href="" class="page-link angka">
                1 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item disabled">
              <span class="page-link">&gt;</span>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-2">Pergi ke</div>
      <div class="form-group col-4 mb-2">
        <input
          class="form-control d-inline text-center"
          placeholder="1"
          style="max-width: 4vw"
        />
        <select
          name=""
          class="form-control d-inline mr-3"
          id=""
          style="max-width: 10vw"
          required
        >
          <option value="" disabled selected hidden>20/laman</option>
          <option value=""></option>
        </select>
        <div class="d-inline mt-2">Total 1</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.angka{
  color: #007bff;
}

.btn-orange{
    background-color: #EE7E1F;
    color: white;
}

.btn-orange:hover{
    background-color: #ce6b1a;
}
</style>