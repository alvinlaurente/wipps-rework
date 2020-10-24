<script>
import InsideLoading from "@/components/InsideLoading";
export default {
  components: { InsideLoading },
  head() {
    return {
      title: "Riwayat Inspeksi Pelaksana Pekerjaan",
    };
  },
  data() {
    return {
      title: "Riwayat Inspeksi Pelaksana Pekerjaan",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Complete Dashboard",
        },
        {
          text: "Riwayat Inspeksi Pelaksana Pekerjaan",
          active: true,
        },
      ],
      value: {
        value1: 59.27,
      },
      animate: true,
      dataChart: [],
      isLoading: false,
      form: {
        cslr: null,
        checked: [],
      },
      cslrs: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    bgbar() {
      let els = document.getElementsByClassName("progress-bar");
      for (let i = 0; i < els.length; i++) {
        if (parseInt(els[i].innerHTML) < 33.33) {
          els[i].classList.add("bg-danger");
        } else if (parseInt(els[i].innerHTML) < 66.66) {
          els[i].classList.add("bg-warning");
        } else if (parseInt(els[i].innerHTML) <= 100) {
          els[i].classList.add("bg-success");
        }
      }
    },
    showAlert(text, type) {
      document.getElementById("alert-message").innerText = text;
      document.getElementById("alert-div").style.display = "block";
      document.getElementById("alert-div").classList.remove("alert-danger");
      document.getElementById("alert-div").classList.remove("alert-success");
      document.getElementById("alert-div").classList.add("alert-" + type);
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    },
    async loadData() {
      this.isLoading = true;
      await fetch(process.env.baseUrl + "/charts/types", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((result) => {
          this.isLoading = false;
          this.dataChart = result.data;
          console.log(this.dataChart);
          setTimeout(() => {
            this.bgbar();
          }, 1);
        })
        .catch((error) => {
          this.isLoading = false;
          this.showAlert(error, "danger");
        });
    },
  },
  mounted: function () {
    this.$activateMenuDropdown("Overall Percentage");
    this.loadData();
  },
  middleware: ["authentication", "block-safety-man"],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading" />
    <PageHeader :title="title" :items="items" />

    <div
      class="alert alert alert-dismissible fade show"
      role="alert"
      id="alert-div"
      style="display: none"
    >
      <h6 style="margin: 0" id="alert-message"></h6>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="hideAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <span>Dari</span>
        <b-form-input type="date" v-model="from"></b-form-input>
      </div>
      <div class="col-md-6">
        <span>Sampai</span>
        <b-form-input type="date" v-model="to"></b-form-input>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <span>PT</span>
        <b-form-input
          id=""
          type="text"
          placeholder="PT GUNA TEGUH ABADI 1584506180"
          disabled
        ></b-form-input>
      </div>
      <div class="col-md-6">
        <span>CSLR</span>
        <b-form-select
          id="input-3"
          v-model="form.cslr"
          :options="cslrs"
          required
        ></b-form-select>
      </div>
    </div>

    <div class="row">
      <span class="col-12 mb-3">Resume:</span>
      <div class="col-12 mb-3">
        <span>Environment Pollution Prevention:</span>
            <b-progress-bar
                class="mt-1 d-block"
                :value="59.38"
                :animated="animate"
                show-value
                :precision="2"
                height="3vw"
            ></b-progress-bar>
      </div>

      <div class="col-12 mb-3">
        <span>Environment Pollution Prevention:</span>
            <b-progress-bar
                class="mt-1 d-block"
                :value="89.38"
                :animated="animate"
                show-value
                :precision="2"
                height="3vw"
            ></b-progress-bar>
      </div>

      <div class="col-12 mb-3">
        <span>Environment Pollution Prevention:</span>
            <b-progress-bar
                class="mt-1 d-block"
                :value="29.38"
                :animated="animate"
                show-value
                :precision="2"
                height="3vw"
            ></b-progress-bar>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.card {
  border: 1px solid #d4d4d5;
}

.card-title {
  margin: 0;
}

footer.card-footer {
  text-align: center;
  font-weight: bold;
}
</style>