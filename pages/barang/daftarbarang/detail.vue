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
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  &gt; Ring Windshock
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
              data-parent="#accordionExample">
              <div class="card-body">
                <div class="mb-3"><b>Status</b> : Unsafe</div>
                <div class="form-group">
                  <b>Catatan</b><br>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  &gt; Tiang Windshock
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <form>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlFile1">Seret gambar kesini</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                  </div>
                  <div class="input-group mb-3">
                    <input class="mr-2 my-auto" type="radio" aria-label="Safe" checked/><span class="mr-3">Safe</span>
                    <input class="mr-2 my-auto" type="radio" aria-label="Safe"/><span class="mr-3">Unsafe</span>
                    <input class="mr-2 my-auto" type="radio" aria-label="Safe"/><span class="mr-3">N/A</span>
                  </div>
                  <div class="form-group">
                    <b>Catatan</b><br>
                    <textarea class="form-control" rows="5"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  &gt; Windshock
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                labore sustainable.
              </div>
            </div>
          </div>
          <div class="card z-depth-0 bordered m-0">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  &gt; Support Tiang
                </button>
              </h5>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                labore sustainable.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
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

.list-group {
  border: 2px solid #d5d3d5;
  cursor: pointer;
}

.list-group li:hover {
  font-weight: bold;
}

.accordion {
  border: 2px solid #d5d3d5;
}

.accordion .card {
  border-bottom: 1px solid #d5d3d5;
}

.accordion .card-header button {
  text-decoration: none;
  color: #7f8081;
}

.accordion .card-header button:hover, .accordion .card-header button:active {
  color: black;
}

</style>