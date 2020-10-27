<script>
import InsideLoading from "@/components/InsideLoading";
import Vuetify from 'vuetify';

export default {
  components: {InsideLoading},
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: "Tambah " + this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      items : [
        {
          text: "Form",
        },
        {
          text: "Referensi",
        },
        {
          text: "Tambah " + this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          active: true,
        },
      ],
      jenis: ["Pihak Ketiga", "Pertamina"],
      peran: [],
      file: null,
      chips: [],
      isLoading: false
    };
  },
  methods: {
    remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
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
    },
    removeUneeded() {
      let notNeededElement = document.getElementsByClassName("not-"+this.$route.params.id)
      if (notNeededElement) {
        for (let i = 0; i < notNeededElement.length; i++) {
          notNeededElement[i].style.display = "none"
          notNeededElement[i].innerHTML = ""
        }
      }
    },
    verifyInput() {
      let valid = true;
      switch (this.$route.params.id) {
        case "judul":
          if (document.getElementById("input-file").files.length === 0) {
            document.getElementById("invalid-file").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-file").style.display = "none";
          }
        case "barang":
        case "pekerjaan":
        case "area":
          if (document.getElementById("input-nama").value === "") {
            document.getElementById("invalid-nama").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-nama").style.display = "none";
          }
          return valid
        case "pelaksana-pekerjaan":
          if (document.getElementById("input-nama").value === "") {
            document.getElementById("invalid-nama").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-nama").style.display = "none";
          }
          if (document.getElementById("input-jenis").value === "") {
            document.getElementById("invalid-jenis").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-jenis").style.display = "none";
          }
          return valid
        case "pengguna":
          if (document.getElementById("input-nama").value === "") {
            document.getElementById("invalid-nama").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-nama").style.display = "none";
          }
          if (document.getElementById("input-email").value === "") {
            document.getElementById("invalid-email").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-email").style.display = "none";
          }
          if (document.getElementById("input-username").value === "") {
            document.getElementById("invalid-username").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-username").style.display = "none";
          }
          if (document.getElementById("input-password").value === "") {
            document.getElementById("invalid-password").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-password").style.display = "none";
          }
          if (document.getElementById("input-konfirmasipassword").value === "") {
            document.getElementById("invalid-konfirmasipassword").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-konfirmasipassword").style.display = "none";
          }
          if (document.getElementById("input-peran").value === "") {
            document.getElementById("invalid-peran").style.display = "block";
            valid = false;
          } else {
            document.getElementById("invalid-peran").style.display = "none";
          }
          if (document.getElementById("input-password").value !== document.getElementById("input-konfirmasipassword").value ) {
            document.getElementById("alert-message").innerText = "Konfirmasi password berbeda dengan password";
            document.getElementById("alert-div").style.display = "block";
            valid = false;
          } else {
            document.getElementById("alert-div").style.display = "none";
          }
          return valid
      }
    },
    getEndpoint() {
      switch (this.$route.params.id) {
        case "daftar-barang":
          return "item-inspections"
        case "judul":
          return "form-types"
        case "barang":
          return "items"
        case "area":
          return "areas"
        case "pekerjaan":
          return "jobs"
        case "pelaksana-pekerjaan":
          return "companies"
        case "pengguna":
          return "users"
      }
    },
    fileChoose(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        var reader = new FileReader()

        reader.onload = e => {
          this.file = e.target.result
        }
        reader.readAsDataURL(files[0])
      }
    },
    submitData() {
      if (this.verifyInput()){
        let sendData = {
          name: document.getElementById("input-nama").value
        }
        switch (this.$route.params.id) {
          case "area":
            sendData.email = this.chips
            break
          case "judul":
            sendData.file = this.file
                break
          case "pelaksana-pekerjaan":
            sendData.type = document.getElementById("input-jenis").value
                break
          case "pengguna":
            sendData.email = document.getElementById("input-email").value
            sendData.username = document.getElementById("input-username").value
            sendData.password = document.getElementById("input-password").value
            sendData.password_confirmation = document.getElementById("input-konfirmasipassword").value
            sendData.role_id = document.getElementById("input-peran").value
                break
        }
        this.isLoading = true
        fetch( process.env.baseUrl + `/` + this.getEndpoint(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          },
          body: JSON.stringify(sendData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json()
        })
        .then(result => {
          this.isLoading = false
          alert(this.title + " berhasil");
          this.$router.push('/table/'+this.$route.params.id)
        })
        .catch(error => {
          this.isLoading = false
          this.showAlert(error, "danger")
        })
      }
    }
  },
  mounted: function () {
    document.getElementsByClassName("v-input__prepend-outer")[0].style.display = "none"

    document.getElementsByClassName("v-input__icon--append")[0].style.display = "none"

    this.$activateMenuDropdown(this.items[2].text.substring(7))
    this.hideAlert()
    this.removeUneeded()
    if (this.$route.params.id === "pengguna") {
      this.isLoading = true
      fetch( process.env.baseUrl + `/roles/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then(result => {
        this.isLoading = false
        this.peran = result.data
        console.log(this.peran)
      })
      .catch(error => {
        this.isLoading = false
        this.showAlert(error, "danger")
      })
    }
  },
  middleware: [
    "authentication",'block-safety-man',"block-safety-inspector","block-supervisor"
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
    <div class="row bg-white pt-3">
      <div class="col-12 form-horizontal">
        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Nama" label-for="text">
          <b-form-input type="text" placeholder="Nama" id="input-nama" @keyup.enter="submitData"></b-form-input>
          <div class="invalid-feedback" id="invalid-nama"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Email" label-for="text" class="not-judul not-barang not-pekerjaan not-pelaksana-pekerjaan not-pengguna">
          <v-combobox v-model="chips" chips clearable multiple prepend-icon="mdi-filter-variant" solo>
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)">
                <span>{{ item }}</span>
              </v-chip>
            </template>
          </v-combobox>
        </b-form-group>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="File" label-for="text" class="not-barang not-area not-pekerjaan not-pelaksana-pekerjaan not-pengguna">
          <b-form-file id="input-file" @change="fileChoose"></b-form-file>
          <div class="invalid-feedback" id="invalid-file"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Email" label-for="text" class="not-area not-judul not-barang not-pekerjaan not-pelaksana-pekerjaan">
          <b-form-input type="email" placeholder="Email" id="input-email" @keyup.enter="submitData"></b-form-input>
          <div class="invalid-feedback" id="invalid-email"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <div class="form-group row mb-0 not-area not-judul not-barang not-pengguna not-pekerjaan">
          <label class="col-md-2 col-form-label">Jenis</label>
          <div class="col-md-10">
            <select id="input-jenis" class="form-control">
              <option value="" disabled selected hidden>Pilih Jenis</option>
              <option v-for="p in jenis" :value="p">{{p}}</option>
            </select>
            <div class="invalid-feedback" id="invalid-jenis"><span>Kolom ini tidak boleh kosong.</span></div>
          </div>
        </div>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Username" label-for="text" class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan">
          <b-form-input type="text" placeholder="Username" id="input-username" @keyup.enter="submitData"></b-form-input>
          <div class="invalid-feedback" id="invalid-username"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Password" label-for="text" class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan">
          <b-form-input type="password" placeholder="Password" id="input-password" @keyup.enter="submitData"></b-form-input>
          <div class="invalid-feedback" id="invalid-password"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <b-form-group label-cols-sm="2" label-cols-lg="2" label="Konfirmasi Password" label-for="text" class="not-judul not-barang not-area not-pekerjaan not-pelaksana-pekerjaan">
          <b-form-input type="password" placeholder="Konfirmasi Password" id="input-konfirmasipassword" @keyup.enter="submitData"></b-form-input>
          <div class="invalid-feedback" id="invalid-konfirmasipassword"><span>Kolom ini tidak boleh kosong.</span></div>
        </b-form-group>

        <div class="form-group row not-area not-judul not-barang not-pekerjaan not-pelaksana-pekerjaan">
          <label class="col-md-2 col-form-label" for="input-peran">Peran</label>
          <div class="col-md-10">
            <select id="input-peran" class="form-control">
              <option value="" disabled selected hidden>Pilih Peran</option>
              <option v-for="p in peran" :value="p.id">{{p.text}}</option>
            </select>
            <div class="invalid-feedback" id="invalid-peran"><span>Kolom ini tidak boleh kosong.</span></div>
          </div>
        </div>

        <div class="form-group">
          <div>
            <button
              type="submit"
              class="btn btn-success"
              v-on:click="submitData"
            >
              Simpan
            </button>
            <nuxt-link type="reset" class="btn btn-danger m-l-5 ml-1" :to="'/table/'+this.$route.params.id">
              Batal
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped >
.v-input__slot{
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: calc(1.5em + 0.94rem + 2px) !important;
  min-height: 0;
  margin: 0 !important;
}
</style>