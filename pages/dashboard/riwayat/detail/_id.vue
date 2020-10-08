<script>
export default {
  head() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      title: this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Riwayat Pengguna"
        },
        {
          text: "Detail"
        },
        {
          text: this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          active: true
        }
      ],
      dataDetail: {
        companies: [{}],
        percentage: [{}]
      }
    };
  },
  methods: {
    async loadData() {
      await fetch(process.env.baseUrl + "/forms/" + this.$route.params.id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          this.dataDetail = result.data;
          console.log(this.dataDetail);
        });
    },
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
  },
  mounted() {
    this.loadData()
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- dashboard>riwayat pengguna>detail -->
    <div class="row">
      <!-- Table -->
      <div class="col-12 mb-3">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td>{{dataDetail.area_id}}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pekerjaan</td>
            <td>{{dataDetail.job_id}}</td>
          </tr>
          <tr>
            <td class="table-secondary">Judul</td>
            <td>{{dataDetail.form_type_id}}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td>{{dataDetail.creator}}</td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td>{{dataDetail.companies[0].name}}</td>
          </tr>
          <tr class="not-overall">
            <td class="table-secondary">Equipment</td>
            <td>{{dataDetail.equipment}}</td>
          </tr>
          <tr class="not-">
            <td class="table-secondary">Persen</td>
            <td>{{dataDetail.percentage[0].percentage}} %</td>
          </tr>
        </table>
      </div>
      <!-- End Table -->

      <!-- Accordion -->
      <div class="col-12 mb-3">
        <div class="accordion" role="tablist">
          <div
            v-for="component in dataDetail.components"
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
      <div class="col-12">
        <div class="form-group">
          <div><nuxt-link type="reset" class="btn btn-danger" to="/dashboard/riwayat">Kembali</nuxt-link></div>
        </div>
      </div>
    </div>
    <!-- End dashboard>riwayat pengguna>detail -->
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 20%;
}

table {
  border-top: 3px solid #000082;
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
