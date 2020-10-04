<script>
/**
 * Dashboard component
 */
export default {
  head() {
    return {
      title: "Referensi",
    };
  },
  data() {
    return {
      title: "Referensi",
      items: [
        {
          text: "Referensi",
        },
        {
          text: this.$route.params.id,
        },
        {
          text: "Referensi",
          active: true,
        },
      ],
      companies: [],
      areas: [],
      jobs: [],
      context: "",
      contexts: {
        BARANG: "barang",
        BERANDA: "beranda"
      },
      form: {
          peran: null,
          jenis: null,
          checked: []
        },
      jenis: [{ text: 'Jenis', value: null }, 'Pihak Ketiga', 'Pertamina'],
      peran: [{ text: 'Peran', value: null }, 'Safetyman', 'Inspector'],
        show: true
    };
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
      id="alert-div"
    >
      <h6 style="margin: 0" id="alert-message">berhasil disimpan</h6>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        v-on:click="hideAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="input-merk">Nama</label>
          <input
            placeholder="Nama"
            type="text"
            class="form-control"
            id="input-nama"
            @keyup.enter="submitData"
          />
          <div class="invalid-feedback" id="invalid-nama">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-barang not-area not-pekerjaan not-pelaksanapekerjaan not-pengguna">
          <label for="input-merk">File</label>
          <b-form-file id="file-default"></b-form-file>
          <div class="invalid-feedback" id="invalid-upload">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Email</label>
          <input
            placeholder="Email"
            type="email"
            class="form-control"
            id="input-email"
            @keyup.enter="submitData"
          />
          <div class="invalid-feedback" id="invalid-email">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Jenis</label>
          <b-form-select
            id="input-jenis"
            v-model="form.jenis"
            :options="jenis"
            required
          ></b-form-select>
          <div class="invalid-feedback" id="invalid-jenis">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-area not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Username</label>
          <input
            placeholder="Username"
            type="text"
            class="form-control"
            id="input-username"
            @keyup.enter="submitData"
          />
          <div class="invalid-feedback" id="invalid-username">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-area not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Password</label>
          <input
            placeholder="Password"
            type="password"
            class="form-control"
            id="input-password"
            @keyup.enter="submitData"
          />
          <div class="invalid-feedback" id="invalid-password">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-area not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Konfirmasi Password</label>
          <input
            placeholder="Konfirmasi Password"
            type="password"
            class="form-control"
            id="input-konfirmasipassword"
            @keyup.enter="submitData"
          />
          <div class="invalid-feedback" id="invalid-konfirmasipassword">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group not-judul not-barang not-pekerjaan not-pelaksanapekerjaan">
          <label for="input-merk">Peran</label>
          <b-form-select
            id="input-peran"
            v-model="form.peran"
            :options="peran"
            required
          ></b-form-select>
          <div class="invalid-feedback" id="invalid-peran">
            <span>Kolom ini tidak boleh kosong.</span>
          </div>
        </div>

        <div class="form-group">
          <div>
            <button
              type="submit"
              class="btn btn-success"
              v-on:click="submitData"
            >
              Simpan
            </button>
            <button type="reset" class="btn btn-danger m-l-5 ml-1" @click="back">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
