<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/candlestick";
import "echarts/lib/chart/gauge";

import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/grid";
import "echarts/lib/component/axis";

export default {
  head() {
    return {
      title: this.title
    };
  },
  components: {
    "v-chart": ECharts,
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
      ],
      from: '2020-01-01',
      to: '2020-12-31',
      selectedTitle: 'This Year',
      selectedVariant: 'danger',
      dataObservation: {
        visualMap: {
          show: false,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          data: ['Safe', 'Unsafe'],
          textStyle: {
            color: '#999'
          }
        },
        color: ['#34c38f','#f46a6a'],
        series: [
          {
            name: 'Observations',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    };
  },
  methods: {formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    },
    changeDate(select){
      document.getElementById("btn-accordion").click()
      this.selectedTitle = select
      switch (select) {
        case "This Year":
          this.from = "2020-01-01"
          this.to = "2020-12-31"
          this.selectedVariant = "danger"
          document.getElementById("calendar-container").style.display = "none"
          this.loadData()
          break
        case "Last 7 Days":
          this.from = this.formatDate(new Date().getTime()-1000*60*60*24*7)
          this.to = this.formatDate(new Date())
          this.selectedVariant = "success"
          document.getElementById("calendar-container").style.display = "none"
          this.loadData()
          break
        case "Last 30 Days":
          this.from = this.formatDate(new Date().getTime()-1000*60*60*24*30)
          this.to = this.formatDate(new Date())
          this.selectedVariant = "warning"
          document.getElementById("calendar-container").style.display = "none"
          this.loadData()
          break
        case "By Date":
          this.selectedVariant = "primary"
          document.getElementById("calendar-container").style.display = "flex"
          break
      }
    },
    loadData() {
      fetch(process.env.baseUrl + "/dashboard-v2/chart/svsu?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.dataObservation.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          this.dataObservation.series[0].data.push({
            value: result[i].total, name: result[i].category
          })
        }
      });
    }
  },
  mounted: function () {
    this.loadData()
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
              <b-button id="btn-accordion" block v-b-toggle.accordion-1 variant="light" class="m-0 p-0 buttonHeader">
                <div>
                  <b-list-group horizontal>
                    <b-list-group-item class="py-2 filterIcon">
                      <i class="bx bxs-filter-alt text-white"></i></b-list-group-item>
                    <b-list-group-item class="py-2 w-100 selectedList" align="left">
                      <b-badge :variant="selectedVariant" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                      <span class="ml-3">{{selectedTitle}}</span>
                    </b-list-group-item>
                  </b-list-group>
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="p-0">
                <b-card-text>
                  <b-button block variant="light" class="m-0 py-2 px-3" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="success" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 7 Days</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="warning" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 30 Days</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="danger" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">This Year</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3" @click="changeDate($event.target.children[1].innerText)">
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

    <div id="calendar-container" class="row mb-4">
      <div class="col-md-6">
        <span>Dari</span>
        <b-form-input type="date" v-model="from" @change="loadData"></b-form-input>
      </div>
      <div class="col-md-6">
        <span>Sampai</span>
        <b-form-input type="date" v-model="to" @change="loadData"></b-form-input>
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
      <div class="col-6">
        <div class="title">Observations</div>
        <v-chart :options="dataObservation" autoresize />
      </div>
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

.top5 .title,
.dataContent .title {
  font-weight: bold;
  font-size: 24px;
}

#calendar-container {
  display: flex;
}
</style>
