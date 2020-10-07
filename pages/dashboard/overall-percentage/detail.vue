<script>
export default {
  head() {
    return {
      title: "Detail",
    };
  },
  data() {
    return {
      title: "Detail",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Overall Percentage",
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

    <!-- Calendar -->
    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-danger">Kembali</button>
        <button class="btn btn-success">Riwayat</button>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h4>PAKAIAN KERJA</h4>
        <b-card
            title="Personal Protective Equipment"
            header-tag="header"
            footer-tag="footer"
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
