<script>
/**
 * Dashboard component
 */
export default {
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
            menus: []
        };
    },
    methods: {
      goTo(path, id) {
        localStorage.setItem("id-form", id)
        localStorage.setItem("prevPath", this.$route.path)
        this.$router.push(path)
      },
      async getData() {
        await fetch( process.env.baseUrl + `/form-types/form`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          }
        })
        .then(response => response.json())
        .then(result => {
          console.log(result)
          this.menus = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
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
    <PageHeader :title="title" :items="items" />
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
.menu-name{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn-orange{
    background-color: #E55A02;
    color: white;
}

.btn-orange:hover{
    background-color: #bf4900;
}
</style>
