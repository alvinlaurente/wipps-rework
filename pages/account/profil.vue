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
                        <input type="text" class="form-control mb-2" placeholder="Nama" disabled/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">This value is required.</span>
                        </div>

                        <label for="">Email</label>
                        <input type="text" class="form-control mb-2" placeholder="Email" disabled/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">This value is required.</span>
                        </div>

                        <label for="">Username</label>
                        <input type="text" class="form-control mb-2" placeholder="Username" disabled/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">This value is required.</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">Simpan</button>
                            <button type="reset" class="btn btn-danger m-l-5 ml-1">
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-orange">Ubah</button>
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
                        <input type="text" class="form-control mb-2" placeholder="Password Lama" disabled/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">This value is required.</span>
                        </div>

                        <label for="">Password Baru</label>
                        <input type="text" class="form-control mb-2" placeholder="Password Baru" disabled/>
                        <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                            <span v-if="!$v.typeform.name.required">This value is required.</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">Simpan</button>
                            <button type="reset" class="btn btn-danger m-l-5 ml-1">
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-orange">Ubah</button>
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