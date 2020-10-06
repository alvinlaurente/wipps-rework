<script>
export default {
  head() {
    return {
      title: "Overall Percentage",
    };
  },
  data() {
    return {
      title: "Overall Percentage",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Overall Percentage",
          active: true,
        },
      ],
      value: {
        value1: 59.27,
      },
      animate: true,
    };
  },
  methods: {
    bgbar() {
      var value = this.value.value1;
      if (value < 33.33) {
        document.getElementById("prog-bar").classList.add("bg-danger");
      } else if (value < 66.66) {
        document.getElementById("prog-bar").classList.add("bg-warning");
      } else if (value <= 100) {
        document.getElementById("prog-bar").classList.add("bg-success");
      }
    },
  },
  mounted: function () {
    this.bgbar();
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-4 mb-3">
        <b-card-group deck>
          <b-card
            title="Personal Protective Equipment"
            header-tag="header"
            footer-tag="footer"
          >
            <b-card-text class="">{{ value.value1 }}%</b-card-text>
            <b-progress-bar
              id="prog-bar"
              :value="value.value1"
              striped
              :animated="animate"
              show-value
              :precision="2"
              height="3vw"
            ></b-progress-bar>
            <template v-slot:footer>
              <span>Personal Protective Equipment</span>
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
