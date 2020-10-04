<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12 mb-3" v-for="d in data" >
        <label>{{ d.sub }}</label>
        <div class="accordion">
          <div v-for="f in d.content" class="card z-depth-0 bordered m-0">
            <div class="card-header">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="$event.target.parentElement.parentElement.parentElement.children[1].classList.toggle('show')"
                >
                  ► &nbsp; {{ f.component }}
                </button>
              </h5>
            </div>
            <div
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="form-group mb-3">
                  <vue-dropzone
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
                    value="safe"
                  />
                  <label class="form-check-label">Safe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    value="unsafe"
                  />
                  <label class="form-check-label">Unsafe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
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
        </div>
      </div>
    </div>
    <div class="row mb-3 for-barang">
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
        <b-form-input value="2019-08-19" type="date"></b-form-input>
      </div>

      <div class="col-6">
        <label>Tanggal akhir berlaku</label>
        <b-form-input value="2019-08-19" type="date"></b-form-input>
      </div>
    </div>

    <div class="row mb-3 for-barang">
      <div class="col-6">
        <label>Safety man</label>
        <b-form-input placeholder="pemeriksa"></b-form-input>
      </div>
      <div class="col-6">
        <label>Pemeriksa</label>
        <b-form-input placeholder="Pemeriksa"></b-form-input>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-success">Simpan</button>
        <nuxt-link :to="'/form/'+this.$route.params.id" class="btn btn-danger">Batal</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      title: "Checklist",
      items: [
        {
          text: "Form",
        },
        {
          text: this.$route.params.id,
        },
        {
          text: "Checklist",
          active: true,
        },
      ],
      prevData: {},
      data: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value",
        },
      }
    };
  },
  mounted: function () {
    this.$activateMenuDropdown("")
    this.prevData = JSON.parse(localStorage.getItem("temp_form"))
    if (this.prevData.context === "beranda") {
      let notNeededElement = document.getElementsByClassName("for-barang")
      for (let i = 0; i < notNeededElement.length; i++) {
        notNeededElement[i].innerHTML = ""
      }
    }
    fetch(process.env.baseUrl + `/form-components?form=` + this.prevData.slug, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      let subs = []
      for (let i = 0; i < result.data.length; i++) {
        subs.push(result.data[i].sub)
      }
      subs = [...new Set(subs)]
      this.data = []
      for (let i = 0; i < subs.length; i++) {
        this.data.push({
          sub: subs[i],
          content: []
        })
      }
      for (let i = 0; i < result.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (result.data[i].sub === this.data[j].sub) {
            this.data[j].content.push(result.data[i])
          }
        }
      }
    })
  }
}
</script>

<style scoped>
</style>
