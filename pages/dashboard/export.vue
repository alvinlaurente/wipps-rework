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
  methods: {
    showIframe() {
      document.getElementById("Iframe").style.display = "block";
    },
  },
  mounted: function () {
    document.getElementById("Iframe").style.display = "none";
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- Calendar -->
    <div class="row mb-4">
      <div class="col-md-3">
        <span>Dari</span>
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date">
          <span>Kolom ini tidak boleh kosong.</span>
        </div>
      </div>
      <div class="col-md-3">
        <span>Sampai</span>
        <b-form-input type="date" id="input-start-date"></b-form-input>
        <div class="invalid-feedback" id="invalid-start-date">
          <span>Kolom ini tidak boleh kosong.</span>
        </div>
      </div>
      <div class="col-md-6 mt-auto text-right">
        <b-button-group size="md">
          <b-button variant="danger" v-on:click="showIframe">Export</b-button>
          <b-button variant="success">Export</b-button>
          <b-button variant="success">Export Form Data</b-button>
        </b-button-group>
      </div>
    </div>

    <div class="row mb-3" id="Iframe">
      <div class="col-12">
        <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" frameborder="0" style="width: 100%; height: 100vh;"></iframe>
      </div>
    </div>
  </div>
</template>
