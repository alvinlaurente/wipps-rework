<script>
export default {
  head() {
    return {
      title: "Export",
    };
  },
  data() {
    return {
      title: "Export",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Export",
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
      <div class="col-4">Dari</div>
      <div class="col-4">Sampai</div>
    </div>
    <div class="row">
      <div class="col-4">
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
      <div class="col-4">
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date"><span>Kolom ini tidak boleh kosong.</span></div>
      </div>
      <div class="col-4 text-right">
        <b-button-group size="md">
          <b-button variant="danger">Export</b-button>
          <b-button variant="success">Export</b-button>
          <b-button variant="success">Export Form Data</b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>