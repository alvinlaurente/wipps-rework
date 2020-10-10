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
      dataChart: []
    };
  },
  methods: {
    bgbar() {
      let els = document.getElementsByClassName('progress-bar');
      for (let i = 0; i < els.length; i++) {
        if (parseInt(els[i].innerHTML) < 33.33) {
          els[i].classList.add("bg-danger");
        } else if (parseInt(els[i].innerHTML) < 66.66) {
          els[i].classList.add("bg-warning");
        } else if (parseInt(els[i].innerHTML) <= 100) {
          els[i].classList.add("bg-success");
        }
      }
    },
    async loadData() {
      await fetch(process.env.baseUrl + "/charts/types", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
      .then((result) => {
        this.dataChart = result.data;
        console.log(this.dataChart);
        setTimeout(() => {this.bgbar()}, 1);
      });
    },
  },
  mounted: function () {
    this.$activateMenuDropdown("Overall Percentage");
    this.loadData()
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-4 mb-3" v-for="data in dataChart">
        <nuxt-link :to="'/dashboard/overall-percentage/'+data.slug+'/detail'" deck>
          <b-card :title="data.name" header-tag="header" footer-tag="footer">
<!--            <b-card-text class="">{{ data.percent }}%</b-card-text>-->
            <b-progress-bar class="mt-1" :value="data.percent"
                            striped :animated="animate" show-value :precision="2" height="3vw"></b-progress-bar>
<!--            <template v-slot:footer>-->
<!--              <span>Personal Protective Equipment</span>-->
<!--            </template>-->
          </b-card>
        </nuxt-link>
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
