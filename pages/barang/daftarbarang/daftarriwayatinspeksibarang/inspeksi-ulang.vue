<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Daftar Riwayat",
    };
  },
  data() {
    return {
      title: "Daftar Riwayat",
      items: [
        {
          text: "Barang",
        },
        {
          text: "Daftar Barang",
        },
        {
          text: "Daftar Riwayat Inspeksi Barang",
        },
        {
          text: "Daftar Riwayat",
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
                    <input class="mr-2 my-auto" type="radio" name="safety" gitaria-label="Safe" checked/><span class="mr-3">Safe</span>
                    <input class="mr-2 my-auto" type="radio" name="safety" aria-label="Safe"/><span class="mr-3">Unsafe</span>
                    <input class="mr-2 my-auto" type="radio" name="safety" aria-label="Safe"/><span class="mr-3">N/A</span>
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

    <div class="row mb-3">
      <div class="col-12 mb-3">
        <label>Keterangan</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="Keterangan"
        ></textarea>
      </div>
      <div class="col">
        <label>Tanggal awal berlaku</label>
        <input type="text" class="form-control" />
      </div>

      <div class="col">
        <label>Tanggal akhir berlaku</label>
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button class="btn btn-success">Simpan</button>
        <button class="btn btn-danger">Batal</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.accordion .card-header button:hover, .accordion .card-header button:active {
  color: black;
}
</style>