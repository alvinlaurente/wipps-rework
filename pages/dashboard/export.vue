<script>
export default {
  head() {
    return {
      title: "Dashboard - Export"
    };
  },
  data() {
    return {
      title: "Export",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Export",
          active: true
        }
      ]
    };
  }
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
        <b-form-datepicker
          id="datepickerDari"
          size="md"
          v-model="value"
          class="mb-2"
        ></b-form-datepicker>
      </div>
      <div class="col-4">
        <b-form-datepicker
          id="datepickerSampai"
          size="md"
          v-model="value"
          class="mb-2"
        ></b-form-datepicker>
      </div>
      <div class="col-4">
        <b-button-group size="md">
          <b-button variant="danger">Export</b-button>
          <b-button variant="success">Export</b-button>
          <b-button variant="success">Export Form Data</b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>
