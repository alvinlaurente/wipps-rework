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
      goTo(path) {
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
          this.menus = result.data
        })
      }
    },
    mounted: function () {
        this.$activateMenuDropdown(this.items[1].text)

        this.getData()

    },
    middleware: [
      "authentication"
    ],
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row" id="menu-list">
        <div v-for="menu in menus" class="col-lg-4">
            <div class="card cursor-pointer" @click="goTo('/form/'+menu.slug)">
                <div class="card-body">
                    <h4 class="mb-0">{{ menu.name }}</h4>
                    <p class="text-muted mb-0">{{ menu.created }}</p>
                    <img :src="menu.file" :alt="menu.name">
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
