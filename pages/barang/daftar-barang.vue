<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Daftar Barang",
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
          active: true,
        },
      ],
      page: 1,
      pageSize: 20,
      tools: [
        {
          model: "i4127yf",
          merk: "Datsun"
        },
        {
          model: "a3howr",
          merk: "Samsung"
        },
        {
          model: "zrqrwqo",
          merk: "Samsung"
        }
      ],
      toolsFiltered: []
    };
  },
  methods: {
    applyFilter() {
      const filter = document.getElementById("filter-daftar-barang").value
      this.pageSize = document.getElementById("filter-page-size").value
      this.toolsFiltered = this.tools.filter(function(tool) {return tool.merk.toUpperCase().includes(filter.toUpperCase())})
        .concat(this.tools.filter(function(tool) {return tool.model.toUpperCase().includes(filter.toUpperCase())}))
        .sort((a, b) => (a.model.toUpperCase() > b.model.toUpperCase()) ? -1 : 1)
        .sort((a, b) => (a.merk.toUpperCase() > b.merk.toUpperCase()) ? 1 : -1)
      this.toolsFiltered = [...new Set(this.toolsFiltered)]
      const total = this.toolsFiltered.length
      document.getElementById("count-filtered").innerText = "Total "+total
      this.toolsFiltered = this.toolsFiltered.slice(this.pageSize*(this.page-1), this.pageSize*this.page)
      if (this.page === 1) {
        document.getElementById("prev-page").classList.add("disabled")
      } else {
        document.getElementById("prev-page").classList.remove("disabled")
      }
      if (this.pageSize*this.page>=total) {
        document.getElementById("next-page").classList.add("disabled")
      } else {
        document.getElementById("next-page").classList.remove("disabled")
      }
    },
    switchPage(newPage) {
      this.page = newPage
      this.applyFilter()
    },
    prevPage() {
      if (!document.getElementById("prev-page").classList.contains("disabled")){
        this.switchPage(this.page-1)
      }
    },
    nextPage() {
      if (!document.getElementById("next-page").classList.contains("disabled")){
        this.switchPage(this.page+1)
      }
    }
  },
  mounted: function () {
    this.$activateMenuDropdown(this.items[1].text)
    this.switchPage(1)
    // fetch( process.env.baseUrl + `/items/list`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //   }
    // })
    // .then(response => response.json())
    // .then(result => {
    //   console.log(result)
    //   this.tools = result.data
    //   this.switchPage(1)
    // })
  },
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-6">
      </div>
      <div class="col-6">
        <input type="search" class="form-control" placeholder="Cari" id="filter-daftar-barang"
               @keyup.enter="switchPage(1)"/>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-lg-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Model</th>
              <th scope="col">Mark</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-light" v-for="(tool, index) in toolsFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ tool.model }}</td>
              <td>{{ tool.merk }}</td>
              <td>
                <nuxt-link class="btn btn-primary btn-sm" to="/barang/daftarbarang/daftar-riwayat-inspeksi-barang">show</nuxt-link>
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
            <li class="page-item disabled" id="prev-page" @click="prevPage">
              <span class="page-link">&lt;</span>
            </li>
            <li class="page-item">
              <a class="page-link angka">{{ page }}</a>
            </li>
            <li class="page-item disabled" id="next-page" @click="nextPage">
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
          id="filter-page-size"
          style="max-width: 10vw"
          required
        >
          <option value="2" selected>2/laman</option>
          <option value="10">10/laman</option>
          <option value="20">20/laman</option>
          <option value=""></option>
        </select>
        <div class="d-inline mt-2" id="count-filtered">Total 1</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.angka{
  color: #007bff;
}
</style>
