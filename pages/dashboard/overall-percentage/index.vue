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
      <div class="col-xl-4 col-md-6 col-sm-12" v-for="(item, index) in dataChart" :key="index">
        <nuxt-link class="card" :to="'/dashboard/overall-percentage/'+item.slug+'/detail'" >
          <div class="card-body">
            <div class="media">
              <div class="avatar-lg mr-4">
                  <img :src="item.file" alt class="mx-auto d-block" style="width: 80px" v-b-tooltip.hover :title="item.name"/>
              </div>
              <div class="media-body align-self-center">
                <div class="border-bottom pb-1">
                  <h5 class="text-truncate font-size-16 mb-1">{{ item.name }}</h5>
                  <p class="text-muted">{{ item.percent }}%</p>
                </div>
              </div>
            </div>
            <b-progress-bar class="mt-1" :value="(item.percent)"
                            :animated="animate" show-value :precision="2" height="3vw"></b-progress-bar>
          </div>
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
