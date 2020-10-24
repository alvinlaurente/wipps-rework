<script>
import Sortable from 'sortablejs'
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
      title: this.title
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
          text: this.$route.params.context
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        },
        {
          text: this.$route.params.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        },
        {
          text: "Edit",
          active: true,
        }
      ],
      context: this.$route.params.context,
      slug: this.$route.params.id,
      baseUrl: process.env.baseUrl,
      selectors: [],
      components: [],
      isLoading1: false,
      isLoading2: false,
    };
  },
  methods: {
    loadData() {
      let ep = "form-components?form"
      let ep2 = "components"
      if (this.context === "barang"){
        ep = "item-requirements?item"
        ep2 = "requirements"
      }
      this.isLoading1 = true
      this.isLoading2 = true
      fetch(this.baseUrl + "/" + ep + "=" + this.slug, {
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
        this.isLoading1 = false
        console.log(result.data);
        this.components = result.data
        if (this.context === "barang"){
          for (let i = 0; i < this.components.length; i++) {
            this.components[i].component = this.components[i].requirement
            this.components[i].component_id = this.components[i].requirement_id
          }
        }
      })
      .catch(error => {
        this.isLoading1 = false
        this.showAlert(error, "danger")
      })
      fetch(this.baseUrl + "/"+ ep2 + "/list", {
        method: "POST",
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
        this.isLoading2 = false
        console.log(result.data);
        this.selectors = result.data
      })
      .catch(error => {
        this.isLoading2 = false
        this.showAlert(error, "danger")
      })
    },
    saveComponent() {
      let sendData = {
        _method: "PUT",
        components: []
      }
      let ep = "form-components"
      let els = document.getElementsByClassName("formulir");
      if (this.context === "barang"){
        sendData = {
          _method: "PUT",
          requirements: []
        }
        for (let i = 0; i < els.length; i++) {
          sendData.requirements.push({
            order: els[i].id,
            requirement: els[i].getAttribute("data-value")
          })
        }
        ep = "item-requirements"
      } else {
        for (let i = 0; i < els.length; i++) {
          sendData.components.push({
            order: els[i].id,
            component: els[i].getAttribute("data-value")
          })
        }
      }
      console.log(sendData)
      this.isLoading1 = true
      this.isLoading2 = true
      fetch( process.env.baseUrl + `/` + ep + `/` + this.slug, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify(sendData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then(result => {
        this.isLoading1 = false
        this.isLoading2 = false
        alert("berhasil mengubah data")
        this.$router.push('/detail/'+this.$route.params.context+'/'+this.$route.params.id)
      })
      .catch(error => {
        this.isLoading1 = false
        this.isLoading2 = false
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
    },
    addComponent() {
      let sel = document.getElementById("input-formulir")
      this.components.push({
        component: sel.options[sel.selectedIndex].text,
        component_id: parseInt(sel.value),
        order: this.components[this.components.length-1].order+1
      })
      console.log(this.components)
    },
    removeComponent(index) {
      if (index > -1) {
        this.components.splice(index, 1);
      }
    }
  },
  mounted: function () {
    this.loadData()
    let dragged;
    let id;
    let index;
    let indexDrop;
    let list;

    document.addEventListener("dragstart", ({ target }) => {
      dragged = target;
      id = target.id;
      list = target.parentNode.children;
      for (let i = 0; i < list.length; i += 1) {
        if (list[i] === dragged) {
          index = i;
        }
      }
    });

    document.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    document.addEventListener("drop", ({ target }) => {
      if (target.className == "formulir" && target.id !== id) {
        dragged.remove(dragged);
        for (let i = 0; i < list.length; i += 1) {
          if (list[i] === target) {
            indexDrop = i;
          }
        }
        console.log(index, indexDrop);
        if (index > indexDrop) {
          target.before(dragged);
        } else {
          target.after(dragged);
        }
      }
    });
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading1&&isLoading2"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row">
      <div class="col-12">
        <template>
          <div>
            <div class="form-group row">
              <label class="col-md-2 col-form-label">Isi Formulir:</label>
              <div class="col-md-10">
                <select id="input-formulir" class="form-control" @change="addComponent">
                  <option value="" disabled selected hidden>Pilih formulir untuk ditambahkan</option>
                  <option v-for="p in selectors" :value="p.id">{{p.text}}</option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <b-card v-for="(component, index) in components" class="mb-2 formulir" :id="component.order"
                draggable="true" :data-value="component.component_id"  >
                <div class="row">
                  <div class="col-11 my-auto">
                    <b-card-text> {{ component.component }} </b-card-text>
                  </div>
                  <div class="col-1 text-right">
                    <b-button class="p-1 px-2 delete" type="cancel" variant="danger" @click="removeComponent(index)">
                      <i class="uil uil-trash-alt"></i>
                    </b-button>
                  </div>
                </div>
              </b-card>
            </div>

            <b-button type="simpan" variant="success" @click="saveComponent">Simpan</b-button>
            <nuxt-link class="btn btn-danger" type="cancel" variant="danger" :to="'/detail/'+this.context+'/'+this.slug" >Batal</nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 10%;
}

tr th:first-child {
  width: 5%;
}

.table-light {
  border-top: 3px solid #184799;
  border-radius: 10px;
}

.table-secondary {
  background-color: #e7e5e7;
}

.table-light th,
.table-light td {
  border: 1px solid #d5d3d5 !important;
}
</style>

<style>
.card-body {
  padding: 1vw;
}
</style>
