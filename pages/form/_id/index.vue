<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Data Awal",
    };
  },
  data() {
    return {
      title: "Data Awal",
      items: [
        {
          text: "Form",
        },
        {
          text: this.$route.params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        },
        {
          text: "Data Awal",
          active: true,
        },
      ],
      companies: [],
      areas: [],
      jobs: [],
      context: "",
      contexts: {
        BARANG: "barang",
        BERANDA: "beranda"
      }
    };
  },
  methods: {
    verifyInfoField(context) {
      var valid = true;
      if (document.getElementById("input-area").value === "") {
        document.getElementById("invalid-area").style.display = "block";
        valid = false;
      } else {
        document.getElementById("invalid-area").style.display = "none";
      }
      if (document.getElementById("input-pelaksana-pekerjaan").value === "") {
        document.getElementById("invalid-pelaksana-pekerjaan").style.display = "block";
        valid = false;
      } else {
        document.getElementById("invalid-pelaksana-pekerjaan").style.display = "none";
      }
      if (context === this.contexts.BARANG) {
        if (document.getElementById("input-merk").value === "") {
          document.getElementById("invalid-merk").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-merk").style.display = "none";
        }
        if (document.getElementById("input-model").value === "") {
          document.getElementById("invalid-model").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-model").style.display = "none";
        }
      } else {
        if (document.getElementById("input-equipment").value === "") {
          document.getElementById("invalid-equipment").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-equipment").style.display = "none";
        }
        if (document.getElementById("input-pekerjaan").value === "") {
          document.getElementById("invalid-pekerjaan").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-pekerjaan").style.display = "none";
        }
      }
      return valid;
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
    back() {
      this.$router.push(localStorage.getItem("prevPath"))
    },
    submitData() {
      if (this.verifyInfoField(this.context)) {
        let data = {}
        if (this.context === this.contexts.BARANG) {
          data = {
            name: new Date(),
            context: this.context,
            slug: this.$route.params.id,
            form_type_id: localStorage.getItem("id-form"),
            brand: document.getElementById("input-merk").value,
            model: document.getElementById("input-model").value,
            companies: document.getElementById("input-pelaksana-pekerjaan").value,
            area_id: document.getElementById("input-area").value
          }
        } else {
          data = {
            name: new Date(),
            context: this.context,
            slug: this.$route.params.id,
            form_type_id: localStorage.getItem("id-form"),
            equipment: document.getElementById("input-equipment").value,
            job_id: document.getElementById("input-pekerjaan").value,
            companies: document.getElementById("input-pelaksana-pekerjaan").value,
            area_id: document.getElementById("input-area").value
          }
        }
        localStorage.setItem('temp_form', JSON.stringify(data))
        this.$router.push(this.$route.path+"/checklist")
      }
    },
    getCompanies() {
      fetch( process.env.baseUrl + `/companies/list`, {
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
        console.log(result)
        this.companies = result.data
      })
      .catch(error => {
        this.showAlert(error, "danger")
      })
    },
    getAreas() {
      fetch(process.env.baseUrl + `/areas/list`, {
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
        console.log(result)
        this.areas = result.data
      })
      .catch(error => {
        this.showAlert(error, "danger")
      })
    },
    getJobs() {
      fetch(process.env.baseUrl + `/jobs/list`, {
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
        console.log(result)
        this.jobs = result.data
      })
      .catch(error => {
        this.showAlert(error, "danger")
      })
    }
  },
  mounted: function () {
    if (localStorage.getItem("prevPath").includes("barang")) {
      if (['ru2','ru4','ru5'].includes(localStorage.getItem("ru"))){
        this.$router.push({
          path: "/",
        });
      }
      this.$activateMenuDropdown("Input Barang")
      this.context = this.contexts.BARANG
    } else {
      this.$activateMenuDropdown("Beranda")
      this.context = this.contexts.BERANDA
      this.getJobs()
    }
    let notNeededElement = document.getElementsByClassName("not-"+this.context)
    for (let i = 0; i < notNeededElement.length; i++) {
      notNeededElement[i].innerHTML = ""

    }
    this.getCompanies()
    this.getAreas()
  },
  middleware: [
    "authentication",
  ]
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <b-form-group label-cols-sm="2" label-cols-lg="2" label="Merk" label-for="text" class="not-beranda">
      <b-form-input type="text" placeholder="Merk" id="input-merk" @keyup.enter="submitData"></b-form-input>
      <div class="invalid-feedback" id="invalid-merk"><span>Kolom ini tidak boleh kosong.</span></div>
    </b-form-group>

    <b-form-group label-cols-sm="2" label-cols-lg="2" label="Model" label-for="text" class="not-beranda mb-0">
      <b-form-input type="text" placeholder="Model" id="input-model" @keyup.enter="submitData"></b-form-input>
      <div class="invalid-feedback" id="invalid-model"><span>Kolom ini tidak boleh kosong.</span></div>
    </b-form-group>

    <div class="form-group row not-barang">
      <label class="col-md-2 col-form-label">Pekerjaan</label>
      <div class="col-md-10">
        <select id="input-pekerjaan" class="form-control">
          <option value="" disabled selected hidden>Pilih Pekerjaan</option>
          <option v-for="job in jobs" :value="job.id">{{job.text}}</option>
        </select>
        <div class="invalid-feedback" id="invalid-pekerjaan"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-2 col-form-label">Pelaksana Kerja</label>
      <div class="col-md-10">
        <select id="input-pelaksana-pekerjaan" class="form-control">
          <option value="" disabled selected hidden>Pilih Pelaksana Kerja</option>
          <option v-for="company in companies" :value="company.id">{{company.text}}</option>
        </select>
        <div class="invalid-feedback" id="invalid-pelaksana-pekerjaan"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-2 col-form-label">Area</label>
      <div class="col-md-10">
        <select id="input-area" class="form-control">
          <option value="" disabled selected hidden>Pilih Area</option>
          <option v-for="area in areas" :value="area.id">{{area.text}}</option>
        </select>
        <div class="invalid-feedback" id="invalid-area"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <b-form-group label-cols-sm="2" label-cols-lg="2" label="Equipment" label-for="text" class="not-barang">
      <b-form-input type="text" placeholder="Equipment" id="input-equipment" @keyup.enter="submitData"></b-form-input>
      <div class="invalid-feedback" id="invalid-equipment"><span>Kolom ini tidak boleh kosong.</span></div>
    </b-form-group>

    <div class="form-group">
      <div>
        <button type="submit" class="btn btn-success" v-on:click="submitData">Simpan</button>
        <button type="reset" class="btn btn-danger m-l-5 ml-1" @click="back">Batal</button>
      </div>
    </div>
  </div>
</template>
