<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12 mb-3" v-for="(d) in data" >
        <label>{{ d.sub }}</label>
        <div class="accordion">
          <div :id="'form-menu-'+f.id" v-for="f in d.content" class="card z-depth-0 bordered m-0 checklist-menu">
            <div class="card-header">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="$event.target.parentElement.parentElement.parentElement.children[1].classList.toggle('show')"
                >
                  ► &nbsp;
                  <i :id="'icon-'+f.id+'-safe'" class="mdi mdi-bell text-success" style="display: none"></i>
                  <i :id="'icon-'+f.id+'-unsafe'" class="mdi mdi-bell text-danger" style="display: none"></i>
                  {{ f.component }}
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
                    @vdropzone-complete="afterComplete(f.id, ...arguments)"
                  >
                    <div class="dropzone-custom-content">
                      <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                      <p>Seret gambar kesini atau klik untuk upload gambar.</p>
                    </div>
                  </vue-dropzone>
                </div>

                <div class="form-check form-check-inline mb-2">
                  <input
                    :class="'form-check-input inlineRadioOptions-'+f.id"
                    type="radio"
                    :name="'inlineRadioOptions-'+f.id"
                    value="1"
                    @click="showSafe(f.id)"
                  />
                  <label class="form-check-label">Safe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    :class="'form-check-input inlineRadioOptions-'+f.id"
                    type="radio"
                    :name="'inlineRadioOptions-'+f.id"
                    value="2"
                    @click="hideSafe(f.id, 'unsafe')"
                  />
                  <label class="form-check-label">Unsafe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    :class="'form-check-input inlineRadioOptions-'+f.id"
                    type="radio"
                    :name="'inlineRadioOptions-'+f.id"
                    value="3"
                    checked
                    @click="hideSafe(f.id, 'na')"
                  />
                  <label class="form-check-label">N/A</label>
                </div>

                <div :class="'form-group safe-total-'+f.id" style="display: none">
                  <p class="mb-2">Jumlah Safe</p>
                  <input :id="'input-people-'+f.id" type="number" class="form-control" placeholder="Jumlah Safe">
                </div>
                <div :class="'form-group safe-total-'+f.id" style="display: none">
                  <p class="mb-2">Total Diamati</p>
                  <input :id="'input-total-'+f.id" type="number" class="form-control" placeholder="Total Diamati">
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
    <div class="row my-3 for-barang">
      <div class="col-12 mb-3">
        <label>Keterangan</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="Keterangan"
          id="input-description"
        ></textarea>
      </div>

      <div class="col-6">
        <label>Tanggal awal berlaku</label>
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>

      <div class="col-6">
        <label>Tanggal akhir berlaku</label>
        <b-form-input type="date" id="input-due-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-due-date"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="row mb-3 for-barang">
      <div class="col-6">
        <label>Safety man</label>
        <b-form-input placeholder="pemeriksa" id="input-safetyman"></b-form-input>
        <div class="invalid-feedback" id="invalid-safetyman"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
      <div class="col-6">
        <label>Pemeriksa</label>
        <b-form-input placeholder="Pemeriksa" id="input-inspector"></b-form-input>
        <div class="invalid-feedback" id="invalid-inspector"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-success" @click="submitChecklist">Simpan</button>
        <nuxt-link :to="'/form/'+this.$route.params.id" class="btn btn-danger">Batal</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  methods: {
    afterComplete(id, response) {
      this.imageList.push({
        formId: id,
        link: JSON.parse(response.xhr.response).data
      })
    },
    showSafe(id) {
      document.getElementById("icon-"+id+"-safe").style.display = "inline"
      document.getElementById("icon-"+id+"-unsafe").style.display = "none"
      if (this.prevData.context === "beranda"){
        let els = document.getElementsByClassName("form-group safe-total-"+id)
        for (let i = 0; i < els.length; i++) {
          els[i].style.display = "block"
        }
      }
    },
    hideSafe(id, clicked) {
      document.getElementById("icon-"+id+"-safe").style.display = "none"
      document.getElementById("icon-"+id+"-unsafe").style.display = "none"
      if (clicked!=="na"){
        document.getElementById("icon-"+id+"-"+clicked).style.display = "inline"
      }
      if (this.prevData.context === "beranda"){
        let els = document.getElementsByClassName("form-group safe-total-"+id)
        for (let i = 0; i < els.length; i++) {
          els[i].children[1].value = ""
          els[i].style.display = "none"
        }
      }
    },
    verifyInfoField(context) {
      var valid = true;
      if (context === "barang") {
        if (document.getElementById("input-safetyman").value === "") {
          document.getElementById("invalid-safetyman").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-safetyman").style.display = "none";
        }
        if (document.getElementById("input-inspector").value === "") {
          document.getElementById("invalid-inspector").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-inspector").style.display = "none";
        }
        if (document.getElementById("input-start-date").value === "") {
          document.getElementById("invalid-start-date").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-start-date").style.display = "none";
        }
        if (document.getElementById("input-due-date").value === "") {
          document.getElementById("invalid-due-date").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-due-date").style.display = "none";
        }
      }
      return valid;
    },
    submitChecklist() {
      if (this.verifyInfoField(this.prevData.context)) {
        this.formData.components = []
        let els = document.getElementsByClassName('checklist-menu')
        for (let i = 0; i < els.length; i++) {
          let comp = {
            id: els[i].id.substring(10),
            note: els[i].children[1].children[0].children[4].children[1].value,
            images: []
          }
          let radio = document.getElementsByClassName("inlineRadioOptions-" + comp.id)
          for (let j = 0; j < radio.length; j++) {
            if (radio[j].checked) {
              comp.status = radio[j].value
            }
          }
          for (let j = 0; j < this.imageList.length; j++) {
            if (this.imageList[j].formId.toString() === comp.id.toString()) {
              comp.images.push({
                index: comp.images.length,
                file: this.imageList[j].link
              })
            }
          }
          if (this.prevData.context === "beranda") {
            comp.people = document.getElementById("input-people-" + comp.id).value
            comp.total = document.getElementById("input-total-" + comp.id).value
          }
          this.formData.components.push(comp)
        }
        let endpoint = "/forms"
        if (!(this.prevData.context === "beranda")) {
          endpoint = "/item-inspections"
          this.formData.form = {
            description: document.getElementById("input-description").value,
            start_date: document.getElementById("input-start-date").value,
            due_date: document.getElementById("input-due-date").value,
            safetyman: document.getElementById("input-safetyman").value,
            inspector: document.getElementById("input-inspector").value
          }
        }
        fetch(process.env.baseUrl + endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          },
          body: JSON.stringify(this.formData)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json()
          })
          .then(result => {
            alert("berhasil menyimpan form")
            this.$router.push('/')
          })
          .catch(error => {
            alert(error)
          })
      }
    }
  },
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
        url: process.env.baseUrl + "/forms/upload/file",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'id-upload': 'id-upload'
        },
      },
      formData: {},
      imageList: []
    };
  },
  mounted: function () {
    this.$activateMenuDropdown("")
    this.prevData = JSON.parse(localStorage.getItem("temp_form"))
    let endPoint = "form-components?form="
    if (this.prevData.context === "beranda") {
      let notNeededElement = document.getElementsByClassName("for-barang")
      for (let i = 0; i < notNeededElement.length; i++) {
        notNeededElement[i].innerHTML = ""
      }
      this.formData.form = {
        area_id: this.prevData.area_id,
        companies: [this.prevData.companies],
        equipment: this.prevData.equipment,
        form_type_id: this.prevData.form_type_id,
        job_id: this.prevData.job_id,
        name: this.prevData.name
      }
    } else {
      endPoint = "item-requirements?item="
      this.formData.item = {
        area_id: this.prevData.area_id,
        brand: this.prevData.brand,
        company_id: this.prevData.companies,
        item_id: this.prevData.form_type_id,
        model: this.prevData.model
      }
    }
    fetch(process.env.baseUrl + `/` + endPoint + this.prevData.slug, {
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
            if (!result.data[i].component) {
              result.data[i].component = result.data[i].requirement
            }
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