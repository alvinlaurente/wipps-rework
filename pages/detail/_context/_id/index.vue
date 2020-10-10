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
      ],
      context: this.$route.params.context,
      slug: this.$route.params.id,
      dataDetail: {},
      formData: {},
      baseUrl: process.env.baseUrl,
    };
  },
  computed: {
    fields() {
      if (this.context === "judul") {
        return [
          {
            key: "No",
            thStyle: { width: "60px" },
          },
          {
            key: "component",
            label: "Nama",
            sortable: true,
          },
        ]
      } else {
        return [
          {
            key: "No",
            thStyle: { width: "60px" },
          },
            {
              key: "requirement",
              label: "Nama",
              sortable: true,
            },
          ]
      }
    }
  },
  methods: {
    getEndpoint() {
      switch (this.context) {
        case "judul":
          return "form-types/";
        case "barang":
          return "items/";
        case "area":
          return "areas/";
        case "pekerjaan":
          return "jobs/";
        case "pelaksana-pekerjaan":
          return "companies/";
        case "pengguna":
          return "users/";
      }
    },
    loadData() {
      fetch(this.baseUrl + "/" + this.getEndpoint() + this.slug, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        this.dataDetail = result.data
        if (this.context === "pengguna") {
          this.dataDetail.role = result.data.roles[0].name
        }
      });
      if (this.context === "judul") {
        fetch(this.baseUrl + "/form-components?form=" + this.slug, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => response.json())
        .then((result) => {
          console.log(result.data);
          this.formData = result.data
        });
      }
      if (this.context === "barang") {
        fetch(this.baseUrl + "/item-requirements?item=" + this.slug, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.data);
            this.formData = result.data
          });
      }
    },
    removeUneeded() {
      let notNeededElement = document.getElementsByClassName(
        "not-" + this.context
      );
      if (notNeededElement) {
        for (let i = 0; i < notNeededElement.length; i++) {
          notNeededElement[i].style.display = "none";
          notNeededElement[i].innerHTML = "";
        }
      }
      setTimeout(() => {
        if (this.context === "judul") {
          document.getElementById("right-tab").innerText = "Isi Formulir"
        } else if (this.context === "barang") {
          document.getElementById("right-tab").innerText = "Daftar Periksa"
        } else {
          document.getElementById("right-tab").style.display = "none"
          document.getElementById("left-tab").style.borderRadius = "5px"
        }
      }, 1);
    },
  },
  mounted: function () {
    this.removeUneeded()
    this.loadData()
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <b-card no-body class="mx-0">
          <b-tabs pills card class="customCard">
            <b-tab title="Detail" button-id="left-tab" active>
              <table class="table table-light mb-0">
                <tr>
                  <td class="table-secondary">Nama</td>
                  <td>{{ dataDetail.name }}</td>
                </tr>
                <tr
                  class="not-barang not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna"
                >
                  <td class="table-secondary">File</td>
                  <td><img :src="baseUrl+'/form-types/'+dataDetail.file" alt="" /></td>
                </tr>
                <tr
                  class="not-judul not-barang not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Email</td>
                  <td>{{ dataDetail.email }} {{ dataDetail.emailString }}</td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pengguna"
                >
                  <td class="table-secondary">Jenis</td>
                  <td>{{ dataDetail.type }}</td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Username</td>
                  <td>{{ dataDetail.username }}</td>
                </tr>
                <tr
                  class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan"
                >
                  <td class="table-secondary">Peran</td>
                  <td>{{ dataDetail.role }}</td>
                </tr>
              </table>
            </b-tab>
            <b-tab button-id="right-tab">
              <nuxt-link :to="this.slug+'/edit'" class="btn btn-warning mb-3 text-md-right">Ubah</nuxt-link>
              <div class="table-responsive mb-0">
                <b-table
                  table-class="table table-centered datatable"
                  thead-tr-class="table-head"
                  :items="formData"
                  :fields="fields"
                  responsive="sm"
                >
                  <template v-slot:cell(no)="data">{{(data.index + 1) }}</template>
                </b-table>
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
  border-top: 3px solid #b40000;
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
  color: #0C8346;
}

.customCard .nav-link.active {
  color: white;
  background-color: #0C8346 !important;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

.customCard .nav-link:not(active) {
  border: 1px solid #0C8346;
}

.customCard .nav-link.active:hover {
  border: 1px solid #0C8346;
}

.customCard .nav-link:hover {
  color: white;
  background-color: #0C8346;
  border: 1px solid #0C8346;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

#left-tab {
  border-radius: 5px 0 0 5px;
}

#right-tab {
  border-radius: 0 5px 5px 0;
}
</style>
