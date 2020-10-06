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
          text: "Inspeksi Ulang",
        },
        {
          text: "Data Awal",
          active: true,
        },
      ],
      companies: [],
      areas: [],
      prevData: {}
    };
  },
  methods: {
    verifyInfoField() {
      let valid = true;
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
      return valid;
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    },
    back() {
      this.$router.push(localStorage.getItem("prevPath"))
    },
    submitData() {
      if (this.verifyInfoField()) {
        let data = {
          name: new Date(),
          context: "barang",
          slug: "windshock-2",
          form_type_id: localStorage.getItem("id-form"),
          brand: document.getElementById("input-merk").value,
          model: document.getElementById("input-model").value,
          companies: document.getElementById("input-pelaksana-pekerjaan").value,
          area_id: document.getElementById("input-area").value
        }
        localStorage.setItem('temp_form', JSON.stringify(data))
        this.$router.push("/form/windshock-2/checklist")
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
      .then(response => response.json())
      .then(result => {
        this.companies = result.data
        console.log(this.companies)
        for (let i = 0; i < this.companies.length; i++) {
          if (this.companies[i].text.includes(this.prevData.company)){
            setTimeout(() => {document.getElementById("input-pelaksana-pekerjaan").value = this.companies[i].id}, 100);
          }
        }
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
      .then(response => response.json())
      .then(result => {
        console.log(this.prevData)
        this.areas = result.data
        for (let i = 0; i < this.areas.length; i++) {
          if (this.areas[i].text === this.prevData.area){
            setTimeout(() => {document.getElementById("input-area").value = this.areas[i].id}, 100);
          }
        }
      })
    },
  },
  mounted: function () {
    this.$activateMenuDropdown("Daftar Barang")
    this.prevData = JSON.parse(localStorage.getItem("selected-data-barang"))
    this.hideAlert();
    this.getCompanies()
    this.getAreas()
    document.getElementById("input-merk").value = this.prevData.brand
    document.getElementById("input-model").value = this.prevData.model
  },
  // middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
      id="alert-div"
    >
      <h6 style="margin: 0" id="alert-message">berhasil disimpan</h6>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        v-on:click="hideAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <b-form-group label-cols-sm="2" label-cols-lg="2" label="Merk" label-for="text" class="not-beranda">
      <b-form-input type="text" placeholder="Merk" id="input-merk" @keyup.enter="submitData"></b-form-input>
      <div class="invalid-feedback" id="invalid-merk"><span>Kolom ini tidak boleh kosong.</span></div>
    </b-form-group>

    <b-form-group label-cols-sm="2" label-cols-lg="2" label="Model" label-for="text" class="not-beranda">
      <b-form-input type="text" placeholder="Model" id="input-model" @keyup.enter="submitData"></b-form-input>
      <div class="invalid-feedback" id="invalid-model"><span>Kolom ini tidak boleh kosong.</span></div>
    </b-form-group>

    <div class="form-group row">
      <label class="col-md-2 col-form-label" for="input-pelaksana-pekerjaan">Pelaksana Kerja</label>
      <div class="col-md-10">
        <select id="input-pelaksana-pekerjaan" class="form-control">
          <option v-for="company in companies" :value="company.id">{{company.text}}</option>
        </select>
        <div class="invalid-feedback" id="invalid-pelaksana-pekerjaan"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-md-2 col-form-label" for="input-area">Area</label>
      <div class="col-md-10">
        <select id="input-area" class="form-control">
          <option v-for="area in areas" :value="area.id">{{area.text}}</option>
        </select>
        <div class="invalid-feedback" id="invalid-area"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
    </div>

    <div class="form-group">
      <div>
        <button type="submit" class="btn btn-success" v-on:click="submitData">Simpan</button>
        <button type="reset" class="btn btn-danger m-l-5 ml-1" @click="back">Batal</button>
      </div>
    </div>
  </div>
</template>
