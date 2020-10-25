<script>
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
      title: "Input Tools and Equipment",
    };
  },
  data() {
    return {
      title: "Input Tools and Equipment",
      items: [{
          text: "Tools and Equipment Inspection",
        },
        {
          text: "Input Tools and Equipment",
          active: true,
        },
      ],
      tools: [],
      toolsFiltered: [],
      isLoading: false
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
    this.$activateMenuDropdown(this.items[1].text)
    this.isLoading = true
    fetch( process.env.baseUrl + `/items/form`, {
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
      this.isLoading = false
      console.log(result)
      this.tools = result.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.applyFilter()
    })
    .catch(error => {
      this.isLoading = false
      this.showAlert(error, "danger")
    })
  },
  middleware: [
    "authentication",
    'block-ru2','block-ru4','block-ru5'
  ]
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
  <input class="form-control mb-3" placeholder="Search" id="input-filter-tools" @keyup="applyFilter">
  <div class="row">
    <div v-for="tool in toolsFiltered" class="col-4">
      <div class="card cursor-pointer" @click="goTo('/form/'+tool.slug, tool.id)">
        <div class="card-body">
          <h4 class="mb-0 menu-name" v-b-tooltip.hover :title="tool.name">{{ tool.name }}</h4>
          <p class="text-muted mb-0">{{ tool.created }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
