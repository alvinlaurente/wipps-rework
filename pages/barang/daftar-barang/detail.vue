<script>
/**
 * Dashboard component
 */
export default {
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
      cardBody: "",
      status: "Safe",
      options: [
        { text: "Safe", value: "Safe" },
        { text: "Unsafe", value: "Unsafe" },
        { text: "N/A", value: "N/A" }
      ]
    };
  },
  mounted: function() {
    this.$activateMenuDropdown("Daftar Barang");
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td>H2PLANT</td>
          </tr>
          <tr>
            <td class="table-secondary">Merk</td>
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

      <div class="col-12 mb-3">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="buttoncustom"
                >► &nbsp; Ring Windshock</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <div class="mb-3"><b>Status</b> : Unsafe</div>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Enter something..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-2
                variant="light"
                class="buttoncustom"
                >► &nbsp; Tiang Windshock</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <b-form-group label="">
                    <b-form-radio-group
                      v-model="status"
                      :options="options"
                      name="radio-inline"
                    ></b-form-radio-group>
                  </b-form-group>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Enter something..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-3
                variant="light"
                class="buttoncustom"
                >► &nbsp; Windshock</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ cardBody }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-4
                variant="light"
                class="buttoncustom"
                >► &nbsp; Support Tiang</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ cardBody }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
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
  border-top: 3px solid #4c8ec4;
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
  border-radius: 10px;
}

.accordion .card-header button {
  text-decoration: none;
  color: #7f8081;
}

.accordion .card-header button:hover,
.accordion .card-header button:active {
  color: black;
}

.card-header {
  padding: 0.3vw;
}

.buttoncustom {
  text-align: left;
}
</style>
