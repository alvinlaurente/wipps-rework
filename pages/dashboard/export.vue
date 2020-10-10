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
      token: localStorage.getItem('token'),
      baseUrl: process.env.baseUrl,
      from: "2020-01-01",
      to: "2020-12-31",
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
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- Calendar -->
    <div class="row mb-4">
      <div class="col-md-3">
        <span>Dari</span>
        <b-form-input type="date" v-model="from"></b-form-input>
      </div>
      <div class="col-md-3">
        <span>Sampai</span>
        <b-form-input type="date" v-model="to"></b-form-input>
      </div>
      <div class="col-md-6 mt-auto text-right">
        <b-button-group size="md">
          <b-button variant="danger" v-on:click="showIframe"><i class="far far fa-file-pdf">&nbsp;</i>Export</b-button>
          <a class="btn btn-success" :href="this.baseUrl+'/export/all/excel?from='+this.from+'&to='+this.to+'&token='+this.token">
            <i class="far fa-file-excel">&nbsp;</i>Export</a>
          <b-button variant="success"><i class="far fa-file-excel">&nbsp;</i>Export Form Data</b-button>
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
