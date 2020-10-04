<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      items: [
        {
          text: "Table",
        },
        {
          text: this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          active: true,
        },
      ],
      page: 1,
      pageSize: 20,
      tools: [
        {
          id: 1,
          model: "i4127yf",
          merk: "Datsun"
        },
        {
          id: 2,
          model: "a3howr",
          merk: "Samsung"
        },
        {
          id: 3,
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
      let notNeededElement = document.getElementsByClassName("not-"+this.$route.params.id)
      console.log(notNeededElement)
      for (let i = 0; i < notNeededElement.length; i++) {
        notNeededElement[i].style.display = "none"
        notNeededElement[i].innerHTML = ""
      }
    },
    switchPage(newPage) {
      const url = process.env.baseUrl
      const filter = document.getElementById("filter-daftar-barang").value
      this.page = newPage
      this.pageSize = document.getElementById("filter-page-size").value
      fetch( baseUrl + `/item-inspections?` +
        `from=` + (this.page-1)*this.pageSize +
        `&to=` + (this.page)*this.pageSize-1 +
        `&search=` + filter +
        `&limit=` + this.pageSize +
        `&page=` + this.page +
        `&order=0` +
        `&ordering=asc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.tools = result.data
        this.switchPage(1)
      })
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
    },
    getColumn() {
      switch (this.$route.params.id) {
        case "daftar-barang":
          return ["No", "Model", "Merk", "Aksi"]
        case "judul":
          return ["No", "Nama", "Aksi"]
        case "barang":
          return ["No", "Nama", "Aksi"]
        case "area":
          return ["No", "Nama", "Aksi"]
        case "pekerjaan":
          return ["No", "Nama", "Aksi"]
        case "pelaksana-pekerjaan":
          return ["No", "Nama", "Jenis", "Aksi"]
        case "pengguna":
          return ["No", "Nama", "Username", "Email", "Peran", "Aksi"]
      }
    },
    show(id) {
      id = id.substring(11)
      localStorage.setItem("selected-id-barang", id)
      this.$router.push('/barang/daftar-barang/daftar-riwayat-inspeksi-barang')
    }
  },
  mounted: function () {
    this.$activateMenuDropdown(this.items[1].text)
    document.getElementById("btn-tambah").innerText = "Tambah " + this.title
    this.switchPage(1)
  },
  // middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-6 not-daftar-barang">
        <button class="btn btn-success" id="btn-tambah"></button>
      </div>
      <div class="col-6">
        <input type="search" class="form-control not-daftar-barang" placeholder="Cari" id="filter-daftar-barang"
               @keyup.enter="switchPage(1)"/>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-lg-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col" v-for="column in getColumn()">{{ column }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-light" v-for="(tool, index) in toolsFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ tool.model }}</td>
              <td>{{ tool.merk }}</td>
              <td>
                <button :id="'data-table-'+tool.id" class="btn btn-primary btn-sm" @click="show($event.target.id)">show</button>
                <button class="btn btn-success btn-sm">asd</button>
                <button class="btn btn-warning btn-sm not-daftar-barang">edit</button>
                <button class="btn btn-danger btn-sm not-daftar-barang">delete</button>
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
          @change="switchPage(page)"
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
