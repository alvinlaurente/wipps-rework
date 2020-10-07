<script>

export default {
  head() {
    return {
      title: "Formulir",
    };
  },
  data() {
    return {
      title: "Formulir",
      items: [
        {
          text: "Referensi",
        },
        {
          text: "Judul",
        },
        {
          text: "Detail",
        },
        {
          text: "Formulir",
          active: true,
        },
      ],
      form: {
        inputformulir: null,
        checked: [],
      },
      listformulir: [
        { text: "Isi Formulir", value: null },
        "Pegangan Alat terbebas dari keretakan",
      ],
      show: true,
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mounted: function () {
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
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <template>
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="inputformulir"
                label="Isi Formulir:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.inputformulir"
                  :options="listformulir"
                  required
                ></b-form-select>
              </b-form-group>

              <div class="mb-3" ondragstart="">
                <b-card
                  class="mb-2 formulir"
                  id="1"
                  draggable="true"
                  data-value="data1"
                >
                  <div class="row">
                    <div class="col-11 my-auto">
                      <b-card-text> Kondisi Mesin </b-card-text>
                    </div>
                    <div class="col-1 text-right">
                      <b-button
                        class="p-1 px-2 delete"
                        type="cancel"
                        variant="danger"
                        ><i class="uil uil-trash-alt"></i
                      ></b-button>
                    </div>
                  </div>
                </b-card>

                <b-card
                  class="mb-2 formulir"
                  id="2"
                  draggable="true"
                  data-value="data2"
                >
                  <div class="row">
                    <div class="col-11 my-auto">
                      <b-card-text> Kondisi Mesin 2</b-card-text>
                    </div>
                    <div class="col-1 text-right">
                      <b-button
                        class="p-1 px-2 delete"
                        type="cancel"
                        variant="danger"
                        ><i class="uil uil-trash-alt"></i
                      ></b-button>
                    </div>
                  </div>
                </b-card>
              </div>

              <b-button type="simpan" variant="success">Simpan</b-button>
              <b-button type="cancel" variant="danger">Batal</b-button>
            </b-form>
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