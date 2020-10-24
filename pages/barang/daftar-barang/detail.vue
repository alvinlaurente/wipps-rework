<script>
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
      title: "Detail"
    };
  },
  data() {
    return {
      title: "Daftar Barang",
      items: [
        {
          text: "Barang"
        },
        {
          text: "Daftar Barang"
        },
        {
          text: "Detail",
          active: true
        }
      ],
      response: {
        user: {}
      },
      cardBody: "",
      status: "Safe",
      options: [
        { text: "Safe", value: "Safe" },
        { text: "Unsafe", value: "Unsafe" },
        { text: "N/A", value: "N/A" }
      ],
      isLoading: false
    };
  },
  methods: {
    convertSafe(code) {
      switch (code) {
        case 1:
          return "Safe";
        case 2:
          return "Unsafe";
        case 3:
          return "N/A"
      }
    },
    async getData() {
      this.isLoading = true
      await fetch(
        process.env.baseUrl +
          `/item-inspections/` +
          localStorage.getItem("selected-id-inspeksi"),
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then(result => {
        this.isLoading = false
        this.response = result.data;
        console.log(result.data);
      })
      .catch(error => {
        this.isLoading = false
        this.showAlert(error, "danger")
      })
    },
    showAlert(text, type) {
      document.getElementById("alert-message").innerText = text;
      document.getElementById("alert-div").style.display = "block";
      document.getElementById("alert-div").classList.remove("alert-danger");
      document.getElementById("alert-div").classList.remove("alert-success");
      document.getElementById("alert-div").classList.add("alert-"+type);
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    }
  },
  mounted: function() {
    this.$activateMenuDropdown("Daftar Barang");
    this.getData();
  },
  middleware: [
    "authentication",
    'block-ru2','block-ru4','block-ru5'
  ],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td>{{ this.response.area_id }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Merk</td>
            <td>{{ this.response.brand }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td>{{ this.response.company_id }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td>{{ this.response.user.name }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Keterangan</td>
            <td>{{ this.response.description }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Model</td>
            <td>{{ this.response.model }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal awal berlaku</td>
            <td>{{ this.response.start_date }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal akhir berlaku</td>
            <td>{{ this.response.due_date }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Safetyman</td>
            <td>{{ this.response.safetyman }}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pemeriksa</td>
            <td>{{ this.response.inspector }}</td>
          </tr>
        </table>
      </div>

      <div class="col-12 mb-3">
        <div class="accordion" role="tablist">
          <div
            v-for="component in response.components"
            class="card z-depth-0 bordered m-0"
          >
            <div class="card-header">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="
                    $event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
                      'show'
                    )
                  "
                >
                  ► &nbsp;
                  <i class="mdi mdi-bell text-danger" v-if="component.status === 2"></i>
                  <i class="mdi mdi-bell text-success" v-if="component.status === 1"></i>
                  {{ component.text }}
                </button>
              </h5>
            </div>
            <div
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <b-card-body>
                <b-card-text>
                  <div class="mb-3">
                    <b>Status</b> : {{ convertSafe(component.status) }}
                  </div>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      disabled
                      rows="3"
                      max-rows="6"
                      :value="component.note"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <nuxt-link
          class="btn btn-danger"
          to="/barang/daftar-barang/daftar-riwayat-inspeksi-barang"
          >Kembali</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 20%;
}

table {
  border-top: 3px solid #000082;
  border-radius: 10px;
}

.table-secondary {
  background-color: #e7e5e7;
}

th,
td {
  border: 1px solid #d5d3d5 !important;
}

.accordion {
  border: 2px solid #d5d3d5;
  border-radius: 10px;
}

.accordion .card {
  border-bottom: 1px solid #d5d3d5;
}
</style>
