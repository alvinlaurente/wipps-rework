<script>
export default {
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
          text: "Pengguna",
          active: true,
        }
      ],
      dataUser: []
    };
  },
  methods: {
    async loadData() {
      await fetch(process.env.baseUrl + "/charts/types", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({type: this.$route.params.id})
      })
      .then((response) => response.json())
      .then((result) => {
        this.dataUser = result.data;
        console.log(this.dataUser);
      });
    },
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
    <PageHeader :title="title" :items="items" />

    <div class="row mb-2">
      <div class="col-12">
        <nuxt-link to="detail" class="btn btn-danger">Kembali</nuxt-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3" v-for="user in dataUser">
        <nuxt-link class="product-box card" :to="user.slug">
          <div class="product-img pt-4 px-4">
            <img :src="user.photo" alt class="img-fluid mx-auto d-block"  v-b-tooltip.hover :title="user.name"/>
          </div>
          <div class="text-center p-4">
            <h5 class="mb-1 text-dark menu-name">{{ user.name }}</h5>
            <p class="text-muted font-size-13">{{ user.created }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
</style>
