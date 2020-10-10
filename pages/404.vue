<script>
/**
 * 404-component
 */
export default {
    layout: "auth",
    head() {
        return {
            title: this.title,
        };
    },
    data() {
        return {
            title: "404 Not Found",
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div class="my-5 pt-sm-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <div>
                        <div class="row justify-content-center">
                            <div class="col-sm-4">
                                <div class="error-img">
                                    <img src="~/assets/images/404-error.png" alt class="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-uppercase mt-4">Halaman tidak ditemukan</h4>
                    <p class="text-muted">Maaf, halaman yang anda tuju tidak tersedia</p>
                    <div class="mt-5">
                        <nuxt-link to="/" class="btn btn-primary">Kembali ke Beranda</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
