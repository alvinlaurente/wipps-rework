<script>
export default {
  head() {
    return {
      title: "Pengguna",
    };
  },
  data() {
    return {
      title: "Pengguna",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Overall Percentage",
        },
        {
          text: "Pengguna",
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

    <div class="row mb-2">
      <div class="col-12">
        <button class="btn btn-danger">Kembali</button>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-0">Admin Balikpapan</h4>
            <p class="text-muted mb-0">Sun. 2020, Apr 26 18:18:22</p>
            <img src=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
</style>
