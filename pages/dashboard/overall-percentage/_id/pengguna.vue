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
      <div class="col-4" v-for="user in dataUser">
        <nuxt-link class="card" :to="user.slug">
          <div class="card-body">
            <h4 class="mb-0">{{ user.name }}</h4>
            <p class="text-muted mb-0">{{ user.created }}</p>
            <img :src="user.photo"/>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
</style>
