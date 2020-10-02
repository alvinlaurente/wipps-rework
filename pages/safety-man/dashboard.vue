<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Dashboard",
        };
    },
    mounted: function () {
    },
    middleware: [
      "authentication",
      "auth-safety-man"
    ],
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                <h4 class="mb-0">Personal Protective Equipment</h4>
                <p class="text-muted mb-0">2019, 09 Tue 23:13:00</p>
                <img src="" alt="">
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
