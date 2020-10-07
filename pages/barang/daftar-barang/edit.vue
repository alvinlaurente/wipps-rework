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
      title: "Ubah"
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
          text: "Ubah",
          active: true
        }
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
      imageList: [],
      response: {
        user: {}
      },
    };
  },
  methods: {
    async getData() {
      await fetch(process.env.baseUrl + `/item-inspections/` +
        localStorage.getItem("selected-id-inspeksi") , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
      .then(response => response.json())
      .then(result => {
        this.response = result.data
        document.getElementById("input-description").value = this.response.description
        document.getElementById("input-start-date").value = this.response.start_date
        document.getElementById("input-due-date").value = this.response.due_date
        console.log(result.data)
        setTimeout(() => {
          for (let i = 0; i < this.response.components.length; i++) {
            document.getElementById("inlineRadioOptions-"+this.response.components[i].id+"-"+this.response.components[i].status).click()
            document.getElementById("note-"+this.response.components[i].id).value = this.response.components[i].note
          }
        }, 1);
      })
    },
    afterComplete(id, response) {
      this.imageList.push({
        formId: id,
        link: JSON.parse(response.xhr.response).data
      })
    },
    coloring(clicked, id) {
      document.getElementById("icon-"+id+"-safe").style.display = "none"
      document.getElementById("icon-"+id+"-unsafe").style.display = "none"
      if (clicked!=="na"){
        document.getElementById("icon-"+id+"-"+clicked).style.display = "inline"
      }
    },
    verifyInfoField() {
      var valid = true;
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
      return valid;
    },
    submitChecklist() {
      if (this.verifyInfoField()) {
        this.formData = {
          description: document.getElementById("input-description").value,
          start_date: document.getElementById("input-start-date").value,
          due_date: document.getElementById("input-due-date").value,
        }
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
          this.formData.components.push(comp)
        }
        fetch(process.env.baseUrl + "/update_old_inspection/"+this.response.id, {
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
          alert("berhasil mengubah data inspeksi")
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
      }
    }
  },
  mounted: function() {
    this.$activateMenuDropdown("Daftar Barang");
    this.getData()
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="accordion">
      <div :id="'form-menu-'+f.id" v-for="f in this.response.components" class="card z-depth-0 bordered m-0 checklist-menu">
        <div class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              v-on:click="$event.target.parentElement.parentElement.parentElement.children[1].classList.toggle('show')"
            >
              ► &nbsp;
              <i :id="'icon-'+f.id+'-safe'" class="fas fa-thumbs-up text-success"></i>
              <i :id="'icon-'+f.id+'-unsafe'" class="fas fa-exclamation-triangle text-danger"></i>
              {{ f.text }}
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
                :id="'inlineRadioOptions-'+f.id+'-'+1"
                value="1"
                @click="coloring('safe', f.id)"

              />
              <label class="form-check-label">Safe</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                :class="'form-check-input inlineRadioOptions-'+f.id"
                type="radio"
                :name="'inlineRadioOptions-'+f.id"
                :id="'inlineRadioOptions-'+f.id+'-'+2"
                value="2"
                @click="coloring('unsafe', f.id)"
              />
              <label class="form-check-label">Unsafe</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                :class="'form-check-input inlineRadioOptions-'+f.id"
                type="radio"
                :name="'inlineRadioOptions-'+f.id"
                :id="'inlineRadioOptions-'+f.id+'-'+3"
                value="3"
                @click="coloring('na', f.id)"
              />
              <label class="form-check-label">N/A</label>
            </div>
            <div class="form-group">
              <p class="mb-2">Catatan</p>
              <textarea
                :id="'note-'+f.id"
                class="form-control"
                rows="5"
                placeholder="Catatan"
              ></textarea>
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

    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-success" @click="submitChecklist">Simpan</button>
        <nuxt-link to="/barang/daftar-barang/daftar-riwayat-inspeksi-barang" class="btn btn-danger">Batal</nuxt-link>
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
