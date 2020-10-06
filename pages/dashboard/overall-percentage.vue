<script>
export default {
  head() {
    return {
      title: "Dashboard - Overall Percentage"
    };
  },
  data() {
    return {
      title: "Overall Percentage",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Overall Percentage",
          active: true
        }
      ],
      animate: true
    };
  },
  methods: {}
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-3">
      <div class="col-md-4">
        <b-card-group deck>
          <b-card
            title="Personal Protective Equipment"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text class="">89.27%</b-card-text>
            <b-progress
              :value="89.27"
              variant="success"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Personal Protective Equipment</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-md-4">
        <b-card-group deck>
          <b-card
            title="Confined Space"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text>58.49%</b-card-text>
            <b-progress
              :value="58.49"
              variant="warning"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Confined Space</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-md-4">
        <b-card-group deck>
          <b-card
            title="Electrical Safety"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text>48.61%</b-card-text>
            <b-progress
              :value="48.61"
              variant="warning"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Electrical Safety</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-4">
        <b-card-group deck>
          <b-card
            title="Environtment Pollution Prevention"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text>56.37%</b-card-text>
            <b-progress
              :value="56.37"
              variant="warning"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Environtment Pollution Prevention</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-md-4">
        <b-card-group deck>
          <b-card title="Fit to Work" header-tag="header" footer-tag="footer">
            <b-card-text>80.1%</b-card-text>
            <b-progress
              :value="80.1"
              variant="success"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Fit to Work</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-md-4">
        <b-card-group deck>
          <b-card
            title="Hot Working In Processing Area"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text>62.42%</b-card-text>
            <b-progress
              :value="62.42"
              variant="warning"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vh"
            ></b-progress>
            <template v-slot:footer>
              <span>Hot Working In Processing Area</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.card {
  border: 1px solid #d4d4d5;
}

.card-title {
  margin: 0;
}

footer.card-footer {
  text-align: center;
  font-weight: bold;
}
</style>
