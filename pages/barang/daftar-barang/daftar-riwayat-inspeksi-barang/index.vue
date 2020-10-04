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
      page: 1,
      pageSize: 20,
      inspeksi: [
        {
          id: "1",
          area: "H2PLANT",
          company: "Pertamina",
          model: "i4127yf",
          merk: "Datsun"
        },
        {
          id: "2",
          area: "H2PLANT",
          company: "PT PT",
          model: "a3howr",
          merk: "Samsung"
        },
        {
          id: "3",
          area: "SAWAH",
          company: "PT PT",
          model: "zrqrwqo",
          merk: "Samsung"
        }
      ],
      inspeksiFiltered: []
    };
  },
  methods: {
    applyFilter() {
      const filter = document.getElementById("filter-inspeksi").value
      this.pageSize = document.getElementById("filter-page-size-inspeksi").value
      this.inspeksiFiltered = this.inspeksi.filter(function(tool) {return tool.merk.toUpperCase().includes(filter.toUpperCase())})
        .concat(this.inspeksi.filter(function(tool) {return tool.model.toUpperCase().includes(filter.toUpperCase())}))
        .concat(this.inspeksi.filter(function(tool) {return tool.area.toUpperCase().includes(filter.toUpperCase())}))
        .concat(this.inspeksi.filter(function(tool) {return tool.company.toUpperCase().includes(filter.toUpperCase())}))
        .sort((a, b) => (a.area.toUpperCase() > b.area.toUpperCase()) ? -1 : 1)
        .sort((a, b) => (a.company.toUpperCase() > b.company.toUpperCase()) ? -1 : 1)
        .sort((a, b) => (a.model.toUpperCase() > b.model.toUpperCase()) ? -1 : 1)
        .sort((a, b) => (a.merk.toUpperCase() > b.merk.toUpperCase()) ? 1 : -1)
      this.inspeksiFiltered = [...new Set(this.inspeksiFiltered)]
      const total = this.inspeksiFiltered.length
      document.getElementById("count-filtered-inspeksi").innerText = "Total "+total
      this.inspeksiFiltered = this.inspeksiFiltered.slice(this.pageSize*(this.page-1), this.pageSize*this.page)
      if (this.page === 1) {
        document.getElementById("prev-page-inspeksi").classList.add("disabled")
      } else {
        document.getElementById("prev-page-inspeksi").classList.remove("disabled")
      }
      if (this.pageSize*this.page>=total) {
        document.getElementById("next-page-inspeksi").classList.add("disabled")
      } else {
        document.getElementById("next-page-inspeksi").classList.remove("disabled")
      }
    },
    switchPage(newPage) {
      this.page = newPage
      this.applyFilter()
    },
    prevPage() {
      if (!document.getElementById("prev-page-inspeksi").classList.contains("disabled")){
        this.switchPage(this.page-1)
      }
    },
    nextPage() {
      if (!document.getElementById("next-page-inspeksi").classList.contains("disabled")){
        this.switchPage(this.page+1)
      }
    },
    show(id) {
      id = id.substring(14)
      localStorage.setItem("selected-id-inspeksi", id)
      this.$router.push('/barang/daftar-barang/detail')
    }
  },
  mounted: function () {
    this.$activateMenuDropdown("Daftar Barang")
    this.switchPage(1)
  },
  // middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-6">
        <nuxt-link class="btn btn-orange" to="/barang/daftar-barang/daftar-riwayat-inspeksi-barang/inspeksi-ulang">Inspeksi Ulang</nuxt-link>
        <nuxt-link class="btn btn-danger" to="/table/daftar-barang">Kembali</nuxt-link>
      </div>
      <div class="col-6">
          <input type="search" class="form-control" placeholder="Cari" id="filter-inspeksi"
                 @keyup.enter="switchPage(1)"/>
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
            <tr class="table-light" v-for="(inspeksi, index) in inspeksiFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ inspeksi.area }}</td>
              <td>{{ inspeksi.company }}</td>
              <td>{{ inspeksi.model }}</td>
              <td>{{ inspeksi.merk }}</td>
              <td>
                <button :id="'data-inspeksi-'+inspeksi.id" class="btn btn-primary btn-sm" @click="show($event.target.id)">show</button>
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
            <li class="page-item disabled" id="prev-page-inspeksi" @click="prevPage">
              <span class="page-link">&lt;</span>
            </li>
            <li class="page-item">
              <a class="page-link angka">{{ page }}</a>
            </li>
            <li class="page-item disabled" id="next-page-inspeksi" @click="nextPage">
              <span class="page-link">&gt;</span>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-2">Pergi ke</div>
      <div class="form-group col-4 mb-2">
        <input
          class="form-control d-inline text-center"
          style="max-width: 4vw"
          :value="page"
          @keyup.enter="switchPage($event.target.value)"
        />
        <select
          name=""
          class="form-control d-inline mr-3"
          id="filter-page-size-inspeksi"
          style="max-width: 10vw"
          required
          @change="switchPage(page)"
        >
          <option value="2" selected>2/laman</option>
          <option value="10">10/laman</option>
          <option value="20">20/laman</option>
          <option value=""></option>
        </select>
        <div class="d-inline mt-2" id="count-filtered-inspeksi">Total 1</div>
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
