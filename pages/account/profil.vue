<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    data() {
        return {
            title: "Profil",
            items: [{
                    text: "Pengguna",
                },
                {
                    text: "Profil",
                    active: true,
                },
            ],
        };
    },
    mounted: function () {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      function setInfo() {
        document.getElementById("input-username").value = user.username
        document.getElementById("input-name").value = user.name
        document.getElementById("input-email").value = user.email
      }
      function setPassword() {
        document.getElementById("input-new-password").value = ""
        document.getElementById("input-old-password").value = ""
      }
      setInfo();
      setPassword();
    },
  middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                <form action="" @submit.prevent="typeForm">
                    <div class="form-group">
                        <label for="">Nama</label>
                        <input type="text" class="form-control mb-2" placeholder="Nama" disabled id="input-name"/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">Kolom ini tidak boleh kosong.</span>
                        </div>

                        <label for="">Email</label>
                        <input type="text" class="form-control mb-2" placeholder="Email" disabled id="input-email"/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">Kolom ini tidak boleh kosong.</span>
                        </div>

                        <label for="">Username</label>
                        <input type="text" class="form-control mb-2" placeholder="Username" disabled id="input-username"/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">Kolom ini tidak boleh kosong.</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success btn-simpan-cancel-info">Simpan</button>
                            <button type="reset" class="btn btn-danger m-l-5 ml-1 btn-simpan-cancel-info">
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-orange btn-ubah-info">Ubah</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                <form action="" @submit.prevent="typeForm">
                    <div class="form-group">
                        <label for="">Password Lama</label>
                        <input type="text" class="form-control mb-2" placeholder="Password Lama" disabled id="input-old-password"/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">Kolom ini tidak boleh kosong.</span>
                        </div>

                        <label for="">Password Baru</label>
                        <input type="text" class="form-control mb-2" placeholder="Password Baru" disabled id="input-new-password"/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">Kolom ini tidak boleh kosong.</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success btn-simpan-cancel-password">Simpan</button>
                            <button type="reset" class="btn btn-danger m-l-5 ml-1 btn-simpan-cancel-password">
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-orange btn-ubah-password">Ubah</button>
                        </div>
                    </div>
                </form>
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
