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

      <div class="col-12 mb-3">
        <div class="accordion" id="accordionExample">
          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="
                    $event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
                      'show'
                    )
                  "
                >
                  ► &nbsp; Ring Windshock
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse">
              <div class="card-body">
                <div class="mb-3"><b>Status</b> : Unsafe</div>
                <div class="form-group">
                  <b>Catatan</b><br />
                  <textarea class="form-control" rows="5" disabled></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="
                    $event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
                      'show'
                    )
                  "
                >
                  ► &nbsp; Tiang Windshock
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="form-group mb-3">
                  <vue-dropzone
                    id="dropzone"
                    ref="myVueDropzone"
                    :use-custom-slot="true"
                    :options="dropzoneOptions"
                  >
                    <div class="dropzone-custom-content">
                      <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                      <p>Seret gambar kesini atau klik untuk upload gambar.</p>
                    </div>
                  </vue-dropzone>
                </div>

                <div class="form-check form-check-inline mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-safe"
                    value="safe"
                  />
                  <label class="form-check-label">Safe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-unsafe"
                    value="unsafe"
                  />
                  <label class="form-check-label">Unsafe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-na"
                    value="na"
                  />
                  <label class="form-check-label">N/A</label>
                </div>

                <div class="form-group">
                  <p class="mb-2">Catatan</p>
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Catatan"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="
                    $event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
                      'show'
                    )
                  "
                >
                  ► &nbsp; Windshock
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable.
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="
                    $event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
                      'show'
                    )
                  "
                >
                  ► &nbsp; Support Tiang
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable.
              </div>
            </div>
          </div>
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
