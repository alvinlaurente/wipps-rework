<script>
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
        title: "Beranda",
    };
  },
  data() {
    return {
      title: "Beranda",
      items: [{
        text: "Dashboard",
      },
      {
        text: "Beranda",
        active: true,
      },
      ],
      user: JSON.parse(localStorage.getItem("user")),
      menus: [],
      isLoading: false
    };
  },
  methods: {
    goTo(path, id) {
      localStorage.setItem("id-form", id)
      localStorage.setItem("prevPath", this.$route.path)
      this.$router.push(path)
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
    async getData() {
      this.isLoading = true
      await fetch( process.env.baseUrl + `/form-types/form`, {
        method: 'GET',
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
        this.menus = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.isLoading = false
      })
      .catch(error => {
        this.isLoading = false
        this.showAlert(error, "danger")
      })
    }
  },
  mounted: function () {
      this.$activateMenuDropdown(this.items[1].text)
      this.getData()
  },
  middleware: [
    "authentication",'block-supervisor'
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
    <div class="row">
      <div class="col-md-3" v-for="menu in menus">
        <div class="product-box card" @click="goTo('/form/'+menu.slug, menu.id)">
          <div class="product-img pt-4 px-4">
            <img :src="menu.file" alt class="img-fluid mx-auto d-block"  v-b-tooltip.hover :title="menu.name"/>
          </div>
          <div class="text-center p-4">
            <h5 class="mb-1 text-dark menu-name">{{ menu.name }}</h5>
            <p class="text-muted font-size-13">{{ menu.created }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-orange{
    background-color: #E55A02;
    color: white;
}

.btn-orange:hover{
    background-color: #bf4900;
}
</style>
