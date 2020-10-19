<script>
export default {
  head() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      title: this.$route.params.id.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      items: [
        {
          text: "Dashboard"
        },
        {
          text: this.$route.params.id.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
          active: true
        }
      ]
    };
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
  beforeCreate() {
    if (this.$route.params.id==="complete-dashboard"&&['ru2','ru4','ru5'].includes(localStorage.getItem('ru'))) {
      this.$router.push({
        path: "/",
      });
    }
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12 mb-3">
        <div class="title">
          <h5>Pilih data untuk ditampilkan</h5>
        </div>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="m-0 p-0 buttonHeader"
              >
                <div>
                  <b-list-group horizontal>
                    <b-list-group-item class="py-2 filterIcon"
                      ><i class="bx bxs-filter-alt text-white"></i></b-list-group-item
                    >
                    <b-list-group-item
                      class="py-2 w-100 selectedList"
                      align="left"
                    >
                      <b-badge variant="danger" pill>
                        &nbsp;&nbsp;&nbsp;
                      </b-badge>
                      <span class="ml-3">This Year</span>
                    </b-list-group-item>
                  </b-list-group>
                </div></b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body class="p-0">
                <b-card-text>
                  <b-button block variant="light" class="m-0 py-2 px-3">
                    <b-badge variant="success" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 7 Days</span>
                  </b-button>

                  <b-button block variant="light" class="m-0 py-2 px-3">
                    <b-badge variant="warning" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 30 Days</span>
                  </b-button>

                  <b-button block variant="light" class="m-0 py-2 px-3">
                    <b-badge variant="danger" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">This Year</span>
                  </b-button>

                  <b-button block variant="light" class="m-0 py-2 px-3">
                    <b-badge variant="primary" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">By Date</span>
                  </b-button>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>

    <div class="row step mb-3 px-2">
      <b-button-group class="w-100">
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100">
            <div class="title">Total Inspection</div>
            <div>0</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100">
            <div class="title">Positive Observation</div>
            <div>0</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100">
            <div class="title">Negative Observation</div>
            <div>0</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100">
            <div class="title">Total Observation</div>
            <div>0</div>
          </b-button>
        </div>
      </b-button-group>
    </div>

    <div class="row dataContent">
      <div class="col-6 title">Observations</div>
      <div class="col-6 title"># Inspections vs Report Score</div>
    </div>
    <div class="row dataContent">
      <div class="col-12 title">Safe Inspection By Rules</div>
    </div>
    <div class="row dataContent">
      <div class="col-6 title">Inspections by Company</div>
      <div class="col-6 title">Average Score by Company</div>
    </div>
    <div class="row dataContent">
      <div class="col-6 title">Inspections by Inspector</div>
      <div class="col-6 title">Average Score by Inspector</div>
    </div>
    <div class="row top5">
      <div class="col-6 title">
        Top 5 Inspections Location
      </div>
      <div class="col-6 title">Top 5 Categories (Of Issues)</div>
    </div>
    <div class="row dataContent">
      <div class="col-6">
        <b-list-group>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-6">
        <b-list-group>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item group-item>Cras justo odio</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="row dataContent">
      <div class="col-12 title">Inspections Location</div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 0;
}

.accordion .filterIcon {
  background-color: #2c4e84;
  border: 0;
}

.accordion .selectedList {
  color: black;
}

.btn {
  text-align: left;
}

.buttonHeader,
.buttonHeader:focus,
.buttonHeader:hover {
  border: 1px solid #50a5f1;
}

.step .btn {
  border: 1px solid grey;
}
.step .title {
  font-weight: bold;
}

.dataContent {
  height: 40vh;
}

.top5 .title,
.dataContent .title {
  font-weight: bold;
  font-size: 24px;
}
</style>

<style></style>
