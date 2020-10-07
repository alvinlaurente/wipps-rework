<script>
export default {
  head() {
    return {
      title: "Detail Riwayat Pengguna"
    };
  },
  data() {
    return {
      title: "Detail Riwayat Pengguna",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Riwayat Pengguna"
        },
        {
          text: "Detail Riwayat Pengguna",
          active: true
        }
      ]
    };
  },
  methods: {}
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
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pekerjaan</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Judul</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td></td>
          </tr>
          <tr class="not-overall">
            <td class="table-secondary">Equipment</td>
            <td></td>
          </tr>
          <tr class="not-">
            <td class="table-secondary">Persen</td>
            <td></td>
          </tr>
        </table>
      </div>
      <!-- End Table -->

      <!-- Accordion -->
      <div class="col-12 mb-3 not-riwayatpengguna">
        <h6>TOPI KESELAMATAN</h6>
        <div class="accordion p-0" role="tablist">
          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="text-left"
                >► &nbsp; Dilengkapi dengan tali dagu</b-button
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
                      disabled
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-2
                variant="light"
                class="text-left"
                >► &nbsp; Permukaan tidak pecah / rusak</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <div class="mb-3"><b>Status</b> : Unsafe</div>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      disabled
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-3
                variant="light"
                class="text-left"
                >► &nbsp; Digunakan dengan benar</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <div class="mb-3"><b>Status</b> : Unsafe</div>
                  <div class="form-group">
                    <b>Catatan</b><br />
                    <b-form-textarea
                      disabled
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <!-- End Accordion -->

      <!-- Accordion -->
      <div class="col-12 mb-3 not-overallpercentage">
        <div class="accordion p-0" role="tablist">
          <b-card no-body class="p-0 m-0">
            <b-card-header header-tag="header" role="tab" class="p-0 m-0">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="text-left"
                >► &nbsp; Dilengkapi dengan tali dagu</b-button
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
                      disabled
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <!-- End Accordion -->

      <div class="col-12">
        <div class="form-group">
          <div>
            <button type="reset" class="btn btn-danger" v-on:click="back">
              Kembali
            </button>
          </div>
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
  border-top: 3px solid #2185d0;
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
