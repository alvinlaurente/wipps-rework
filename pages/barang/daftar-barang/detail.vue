<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Detail",
    };
  },
  data() {
    return {
      title: "Daftar Barang",
      items: [
        {
          text: "Barang",
        },
        {
          text: "Daftar Barang",
        },
        {
          text: "Detail",
          active: true,
        },
      ],
    };
  },
  methods: {
    collapseOne() {
      document.getElementById("collapseOne").classList.toggle("show");
    },
    collapseTwo() {
      document.getElementById("collapseTwo").classList.toggle("show");
    },
    collapseThree() {
      document.getElementById("collapseThree").classList.toggle("show");
    },
    collapseFour() {
      document.getElementById("collapseFour").classList.toggle("show");
    },
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <table class="table table-light">
          <tr>
            <td class="table-secondary">Area</td>
            <td>H2PLANT</td>
          </tr>
          <tr>
            <td class="table-secondary">Merk</td>
            <td>Datsun</td>
          </tr>
          <tr>
            <td class="table-secondary">Pelaksana Pekerjaan</td>
            <td>CV.ALFAGHA</td>
          </tr>
          <tr>
            <td class="table-secondary">Pengguna</td>
            <td>Admin Balongan</td>
          </tr>
          <tr>
            <td class="table-secondary">Keterangan</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-secondary">Model</td>
            <td>z54</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal awal berlaku</td>
            <td>2020-04-23</td>
          </tr>
          <tr>
            <td class="table-secondary">Tanggal akhir berlaku</td>
            <td>2020-04-30</td>
          </tr>
          <tr>
            <td class="table-secondary">Safetyman</td>
            <td>Paijo</td>
          </tr>
          <tr>
            <td class="table-secondary">Pemeriksa</td>
            <td>Paijo</td>
          </tr>
        </table>
      </div>

      <div class="col-12 mb-3">
        <div class="accordion" id="accordionExample">
          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="collapseOne"
                >
                  ► &nbsp; Ring Windshock
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse">
              <div class="card-body">
                <div class="mb-3"><b>Status</b> : Unsafe</div>
                <div class="form-group">
                  <b>Catatan</b><br />
                  <textarea class="form-control" rows="5" disabled></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="collapseTwo"
                >
                  ► &nbsp; Tiang Windshock
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="form-check form-check-inline mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-safe"
                    value="safe"
                    checked
                  />
                  <label class="form-check-label">Safe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-unsafe"
                    value="unsafe"
                  />
                  <label class="form-check-label">Unsafe</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="radio-na"
                    value="na"
                  />
                  <label class="form-check-label">N/A</label>
                </div>

                <div class="form-group">
                  <b>Catatan</b><br />
                  <textarea class="form-control" rows="5" disabled></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="collapseThree"
                >
                  ► &nbsp; Windshock
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable.
              </div>
            </div>
          </div>

          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  v-on:click="collapseFour"
                >
                  ► &nbsp; Support Tiang
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <button class="btn btn-danger">Kembali</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
tr td:first-child {
  width: 20%;
}

table {
  border-top: 3px solid #4c8ec4;
  border-radius: 10px;
}

.table-secondary {
  background-color: #e7e5e7;
}

th,
td {
  border: 1px solid #d5d3d5 !important;
}

.accordion {
  border: 2px solid #d5d3d5;
  border-radius: 10px;
}

.accordion .card {
  border-bottom: 1px solid #d5d3d5;
  border-radius: 10px;
}

.accordion .card-header button {
  text-decoration: none;
  color: #7f8081;
}

.accordion .card-header button:hover,
.accordion .card-header button:active {
  color: black;
}

.card-header {
  padding: 0.3vw;
}
</style>