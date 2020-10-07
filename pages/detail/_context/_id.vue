<script>
export default {
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: this.$route.params.id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      items: [
        {
          text: this.$route.params.context
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        },
        {
          text: this.$route.params.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        },
        {
          text: "Detail",
          active: true,
        }
      ]
    };
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <b-card no-body class="mx-0">
          <b-tabs pills card class="customCard">
            <b-tab title="Detail" title-link-class="left-tab" active>
              <table class="table table-light mb-0">
                <tr>
                  <td class="table-secondary">Nama</td>
                  <td>Personal Protective Equipment</td>
                </tr>
                <tr
                  class="not-barang not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna"
                >
                  <td class="table-secondary">File</td>
                  <td><img src="img.jpg" alt="" /></td>
                </tr>
                <tr
                  class="not-judul not-barang not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Email</td>
                  <td></td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pengguna"
                >
                  <td class="table-secondary">Jenis</td>
                  <td>Pihak Ketiga</td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Username</td>
                  <td>asyahid</td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Peran</td>
                  <td></td>
                </tr>
              </table>
            </b-tab>
            <b-tab
              title-link-class="right-tab"
              title="Isi Formulir"
              class="not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna"
            >
              <button class="btn btn-warning mb-3">Ubah</button>

              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="thead-light">
                    <tr>
                      <th>No.</th>
                      <th
                        class="not-barang not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna"
                      >
                        Isi Formulir
                      </th>
                      <th
                        class="not-judul not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna"
                      >
                        Daftar Periksa
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td class="not-barang not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna">Mark</td>
                      <td class="not-judul not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna">Otto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 10%;
}

tr th:first-child {
  width: 5%;
}

.table-light {
  border-top: 3px solid #184799;
  border-radius: 10px;
}

.table-secondary {
  background-color: #e7e5e7;
}

.table-light th,
.table-light td {
  border: 1px solid #d5d3d5 !important;
}
</style>

<style>
.card-header-pills {
  margin: 0px;
  padding: 0.5vw;
}

.nav-item {
  margin-right: 0;
}

.nav-tabs > li > a,
.nav-pills > li > a {
  color: #184799;
}

.customCard .nav-link.active {
  color: white;
  background-color: #184799 !important;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

.customCard .nav-link:not(active) {
  border: 1px solid #184799;
}

.customCard .nav-link.active:hover {
  border: 1px solid #184799;
}

.customCard .nav-link:hover {
  color: white;
  background-color: #184799;
  border: 1px solid #184799;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

.left-tab {
  border-radius: 5px 0 0 5px !important;
}

.right-tab {
  border-radius: 0 5px 5px 0 !important;
}
</style>
