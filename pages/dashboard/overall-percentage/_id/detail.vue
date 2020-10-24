<script>
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: this.$route.params.id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      items: [
        {
          text: "Overall Percentage"
        },
        {
          text: this.$route.params.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        },
        {
          text: "Detail",
          active: true,
        }
      ],
      dataComponent: [],
      subs: [],
      isLoading: false
    };
  },
  methods: {
    bgpill() {
      let els = document.getElementsByClassName('badge');
      for (let i = 0; i < els.length; i++) {
        if (parseInt(els[i].innerHTML) < 50) {
          els[i].classList.add("bg-danger");
        } else if (parseInt(els[i].innerHTML) < 80) {
          els[i].classList.add("bg-warning");
        } else if (parseInt(els[i].innerHTML) <= 100) {
          els[i].classList.add("bg-success");
        }
      }
    },
    async loadData() {
      this.isLoading = true
      await fetch(process.env.baseUrl + "/charts/checklists?type=" + this.$route.params.id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading = false
        for (let i = 0; i < result.data.length; i++) {
          this.subs.push(result.data[i].sub)
        }
        this.subs = [...new Set(this.subs)]
        this.dataComponent = result.data
        console.log(this.subs)
        console.log(this.dataComponent)
        setTimeout(() => {this.bgpill()}, 1);
      })
      .catch(error => {
        this.isLoading = false
        this.showAlert(error, "danger")
      })
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
    }
  },
  mounted: function () {
    this.$activateMenuDropdown("Overall Percentage");
    this.loadData()
  },
  middleware: [
    "authentication",'block-safety-man'
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
    <!-- Calendar -->
    <div class="row mb-3">
      <div class="col-12">
        <nuxt-link to="/dashboard/overall-percentage/" class="btn btn-danger mr-2">Kembali</nuxt-link>
        <nuxt-link to="pengguna" class="btn btn-success">Riwayat</nuxt-link>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12 mb-3" v-for="s in subs">
        <h4>{{s}}</h4>
        <b-list-group v-for="c in dataComponent" v-if="c.sub===s">
          <b-list-group-item>{{c.name}}<span class="p-1"><b-badge>{{c.percent}}</b-badge></span></b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.list-group-item span {
  float: right;
}
</style>
