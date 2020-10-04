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
      tableItem: [],
      tableItemFiltered: []
    };
  },
  methods: {
    applyFilter() {
      const filter = document.getElementById("filter-text").value
      this.tableItemFiltered = this.tableItem.filter(function (item) {
        return item.searchHelper.toLowerCase().includes(filter.toLowerCase())
      })
      const total = this.tableItemFiltered.length
      document.getElementById("count-filtered").innerText = "Total "+total
      this.tableItemFiltered = this.tableItemFiltered.slice(this.pageSize*(this.page-1), this.pageSize*this.page)
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
      this.removeUneeded()
    },
    switchPage(newPage) {
      this.pageSize = document.getElementById("filter-page-size").value
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
    getEndpoint() {
      switch (this.$route.params.id) {
        case "daftar-barang":
          return "item-inspections"
        case "judul":
          return "form-types"
        case "barang":
          return "items"
        case "area":
          return "areas"
        case "pekerjaan":
          return "jobs"
        case "pelaksana-pekerjaan":
          return "companies"
        case "pengguna":
          return "users"
      }
    },
    checkTableContext(context) {
      return this.$route.params.id === context
    },
    removeUneeded() {
      let notNeededElement = document.getElementsByClassName("not-"+this.$route.params.id)
      if (notNeededElement) {
        for (let i = 0; i < notNeededElement.length; i++) {
          notNeededElement[i].style.display = "none"
          notNeededElement[i].innerHTML = ""
        }
      }
    },
    showInspeksi(id) {
      id = id.substring(11)
      localStorage.setItem("selected-id-barang", id)
      this.$router.push('/barang/daftar-barang/daftar-riwayat-inspeksi-barang')
    },
    async loadData() {
      let url = process.env.baseUrl
      url += `/`+this.getEndpoint()+`?search[value]=&start=0&length=2000&order[0][column]=0&order[0][dir]=asc` +
        `&to=` + `2020` + `-12-31` +
        `&from=` + `2020` + `-01-01`
      await fetch( url , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
      .then(response => response.json())
      .then(result => {
        this.tableItem = result.data
        for (let i = 0; i < this.tableItem.length; i++) {
          switch (this.$route.params.id) {
            case "daftar-barang":
              this.tableItem[i]["searchHelper"] = this.tableItem[i].model + ' ' + this.tableItem[i].brand
              break
            case "barang":
            case "area":
            case "pekerjaan":
            case "judul":
              this.tableItem[i]["searchHelper"] = this.tableItem[i].name
              break
            case "pelaksana-pekerjaan":
              this.tableItem[i]["searchHelper"] = this.tableItem[i].name + ' ' + this.tableItem[i].type
              break
            case "pengguna":
              this.tableItem[i]["searchHelper"] = this.tableItem[i].name + ' ' + this.tableItem[i].username + ' ' + this.tableItem[i].email
              break
          }
        }
        console.log(this.tableItem)
        this.switchPage(1)
      })
    }
  },
  mounted: function () {
    this.$activateMenuDropdown(this.items[1].text)
    document.getElementById("btn-tambah").innerText = "Tambah " + this.title
    this.removeUneeded()
    this.loadData()
  },
  // middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-6">
        <button class="btn btn-success not-daftar-barang" id="btn-tambah"></button>
      </div>
      <div class="col-6">
        <input type="search" class="form-control" placeholder="Cari" id="filter-text"
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
          <tbody v-if="checkTableContext('daftar-barang')">
            <tr class="table-light" v-for="(item, index) in tableItemFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ item.model }}</td>
              <td>{{ item.brand }}</td>
              <td>
                <button :id="'show-table-'+item.item_id" class="btn btn-primary btn-sm" @click="showInspeksi($event.target.id)">show</button>
                <button class="btn btn-success btn-sm">asd</button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="checkTableContext('judul')||checkTableContext('barang')
              ||checkTableContext('area')||checkTableContext('pekerjaan')">
            <tr class="table-light" v-for="(item, index) in tableItemFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ item.name }}</td>
              <td>
                <button :id="'show-table-'+item.item_id" class="btn btn-primary btn-sm">show</button>
                <button class="btn btn-warning btn-sm">edit</button>
                <button class="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="checkTableContext('pelaksana-pekerjaan')">
            <tr class="table-light" v-for="(item, index) in tableItemFiltered">
              <td>{{ (page-1)*pageSize+index+1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>
                <button :id="'show-table-'+item.item_id" class="btn btn-primary btn-sm">show</button>
                <button class="btn btn-warning btn-sm">edit</button>
                <button class="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="checkTableContext('pengguna')">
          <tr class="table-light" v-for="(item, index) in tableItemFiltered">
            <td>{{ (page-1)*pageSize+index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td>
              <button :id="'show-table-'+item.item_id" class="btn btn-primary btn-sm">show</button>
              <button class="btn btn-warning btn-sm">edit</button>
              <button class="btn btn-danger btn-sm">delete</button>
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
          <option value="20" selected>20/laman</option>
          <option value="50">50/laman</option>
          <option value="100">100/laman</option>
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
