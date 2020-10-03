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
          text: "Barang",
        },
        {
          text: "Input Barang",
        },
        {
          text: "Data Awal",
          active: true,
        },
      ],
      companies: ["Pertamina"],
      areas: ["area 1"]
    };
  },
  methods: {
    verifyInfoField() {
      var valid = true;
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
    submitData() {
      if (this.verifyInfoField()) {
        fetch(process.env.baseUrl + `/profile/edit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            document.getElementById("alert-message").innerText =
              "Input data awal berhasil";
            document.getElementById("alert-div").style.display = "block";
            this.user = result.data;
            localStorage.setItem("user", JSON.stringify(this.user));
            localStorage.setItem("name", result.data.name);
          } else {
            document.getElementById("alert-message").innerText =
              "Input data awal gagal";
            document.getElementById("alert-div").style.display = "block";
          }
        });
      }
    },
  },
  mounted: function () {
    this.$activateMenuDropdown("Input Barang")
    this.hideAlert();
    fetch( process.env.baseUrl + `/companies/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.companies = result.data
    })
    fetch( process.env.baseUrl + `/areas/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.areas = result.data
    })
  },
  middleware: "authentication",
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

    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="input-merk">Merk</label>
            <input
              placeholder="Merk"
              type="text"
              class="form-control"
              id="input-merk"
              @keyup.enter="submitData"
            />
            <div class="invalid-feedback" id="invalid-merk">
              <span>Kolom ini tidak boleh kosong.</span>
            </div>
          </div>

          <div class="form-group">
            <label for="input-model">Model</label>
            <input
              placeholder="Model"
              type="text"
              class="form-control"
              id="input-model"
              @keyup.enter="submitData"
            />
            <div class="invalid-feedback" id="invalid-model">
              <span>Kolom ini tidak boleh kosong.</span>
            </div>
          </div>

          <div class="form-group">
            <label>Pelaksanaan Kerja</label>
            <select class="form-control" required>
              <option value="" disabled selected hidden>
                Pilih Pelaksanaan Kerja
              </option>
              <option v-for="company in companies" :value="company.id">{{company.text}}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Area</label>
            <select class="form-control" required>
              <option value="" disabled selected hidden>Pilih Area</option>
              <option v-for="area in areas" :value="area.id">{{area.text}}</option>
            </select>
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
              <nuxt-link type="reset" class="btn btn-danger m-l-5 ml-1" to="/barang/input-barang">
                Batal
              </nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
