<script>
import vue2Dropzone from "vue2-dropzone";

import "vue2-dropzone/dist/vue2Dropzone.min.css";

/**
 * Dashboard component
 */
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  head() {
    return {
      title: "Daftar Riwayat"
    };
  },
  data() {
    return {
      title: "Daftar Riwayat",
      items: [
        {
          text: "Barang"
        },
        {
          text: "Daftar Barang"
        },
        {
          text: "Daftar Riwayat Inspeksi Barang"
        },
        {
          text: "Daftar Riwayat",
          active: true
        }
      ],

      cardBody: "",

      status: "Safe",
      options: [
        { text: "Safe", value: "Safe" },
        { text: "Unsafe", value: "Unsafe" },
        { text: "N/A", value: "N/A" }
      ],

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value"
        }
      }
    };
  },
  methods: {},
  mounted: function() {
    this.$activateMenuDropdown("Daftar Barang");
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12 mb-3">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-0">
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

          <b-card no-body class="mb-0">
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

                  <vue-dropzone
                    id="dropzone"
                    ref="myVueDropzone"
                    :use-custom-slot="true"
                    :options="dropzoneOptions"
                    class="mb-3"
                  >
                    <div class="dropzone-custom-content">
                      <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                      <p>Seret gambar kesini atau klik untuk upload gambar.</p>
                    </div>
                  </vue-dropzone>

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

          <b-card no-body class="mb-0">
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

          <b-card no-body class="mb-0">
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
    </div>

    <div class="row mb-3">
      <div class="col-12 mb-3">
        <label>Keterangan</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="Keterangan"
        ></textarea>
      </div>

      <div class="col-6">
        <label>Tanggal awal berlaku</label>
        <b-form-input id="date" value="2019-08-19" type="date"></b-form-input>
      </div>

      <div class="col-6">
        <label>Tanggal akhir berlaku</label>
        <b-form-input id="date" value="2019-08-19" type="date"></b-form-input>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-success">Simpan</button>
        <nuxt-link
          to="/barang/daftar-barang/daftar-riwayat-inspeksi-barang"
          class="btn btn-danger"
          >Batal</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 2px solid #d5d3d5;
  border-radius: 10px;
}

.accordion .card {
  border-bottom: 1px solid #d5d3d5;
}

.buttoncustom {
  text-align: left;
}
</style>
