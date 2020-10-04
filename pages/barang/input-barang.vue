<script>
export default {
    head() {
        return {
            title: "Input Barang",
        };
    },
    data() {
        return {
            title: "Input Barang",
            items: [{
                    text: "Barang",
                },
                {
                    text: "Input Barang",
                    active: true,
                },
            ],
            tools: [],
            toolsFiltered: []
        };
    },
    methods: {
        applyFilter() {
            const filter = document.getElementById("input-filter-tools").value
            this.toolsFiltered = this.tools.filter(function(tool) {return tool.name.toUpperCase().includes(filter.toUpperCase());})
        },
        goTo(path, id) {
          localStorage.setItem("id-form", id)
          localStorage.setItem("prevPath", this.$route.path)
          this.$router.push(path)
        }
    },
    mounted: function () {
        this.$activateMenuDropdown(this.items[1].text)
        fetch( process.env.baseUrl + `/items/form`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.tools = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
            this.applyFilter()
        })
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <input class="form-control mb-3" placeholder="Search" id="input-filter-tools" @keyup.enter="applyFilter">

    <div class="row">
        <div v-for="tool in toolsFiltered" class="col-4">
            <div class="card cursor-pointer" @click="goTo('/form/'+tool.slug, tool.id)">
                <div class="card-body">
                    <h4 class="mb-0">{{ tool.name }}</h4>
                    <p class="text-muted mb-0">{{ tool.created }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
