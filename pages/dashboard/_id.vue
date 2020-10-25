<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/candlestick";
import "echarts/lib/chart/gauge";
import InsideLoading from "@/components/InsideLoading";

import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/grid";
import "echarts/lib/component/axis";
import "echarts/lib/component/dataZoom";
export default {
  head() {
    return {
      title: this.title
    };
  },
  components: {
    "v-chart": ECharts,
    InsideLoading
  },
  data() {
    return {
      title: this.$route.params.id.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      items: [
        {
          text: "Site Safety Inspection"
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
      isLoading1: false,
      isLoading2: false,
      isLoading3: false,
      isLoading4: false,
      isLoading5: false,
      isLoading6: false,
      isLoading7: false,
      isLoading8: false,
      isLoading9: false,
      listCompany: [],
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
      },
      dataInspectionBar: {
        // Setup grid
        grid: {
          zlevel: 0,
          x: 80,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#556ee6', '#34c38f'],
        legend: {
          data: ['Jumlah', 'Safe Percentage'],
          textStyle: { color: '#8791af' }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Jumlah',
            min: 0,
            max: 150,
            interval: 30,
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: 'Percentage',
            min: 0,
            max: 100,
            interval: 20,
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: 'Jumlah',
            type: 'bar',
            data: []
          },
          {
            name: 'Safe Percentage',
            type: 'line',
            yAxisIndex: 1,
            data: []
          }
        ]
      },
      dataSafeInspectionByRule: {
        grid: {
          zlevel: 0,
          x: 80,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#34c38f'],
        legend: {
          data: [],
          textStyle: { color: '#8791af' }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 5,
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          },
          {
            type: 'value',
            name: 'Percentage',
            min: 0,
            max: 100,
            interval: 5,
            axisLine: {
              lineStyle: {
                color: '#8791af'
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 94,
            end: 100
          },
          {
            show: false
          }
        ],
        series: [
          {
            name: 'Safe Percentage',
            type: 'bar',
            data: []
          }
        ]
      },
      dataInspectionByCompany: {
        grid: {
          zlevel: 0,
          x: 200,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#556ee6'],
        legend: {
          data: []
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
          interval: 20,
        },
        yAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
        },
        series: [
          {
            name: 'Total',
            type: 'bar',
            data: []
          }
        ]
      },
      dataScoreByCompany: {
        grid: {
          zlevel: 0,
          x: 200,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#556ee6'],
        legend: {
          data: []
        },
        xAxis: {
          type: 'value',
          max: 100,
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
          interval: 20,
        },
        yAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
        },
        series: [
          {
            name: 'Score',
            type: 'bar',
            data: []
          }
        ]
      },
      dataInspectionByInspector: {
        grid: {
          zlevel: 0,
          x: 160,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#34c38f'],
        legend: {
          data: []
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
          interval: 20,
        },
        yAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
        },
        series: [
          {
            name: 'Total',
            type: 'bar',
            data: []
          }
        ]
      },
      dataScoreByInspector: {
        grid: {
          zlevel: 0,
          x: 160,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: ['#34c38f'],
        legend: {
          data: []
        },
        xAxis: {
          type: 'value',
          max: 100,
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
          interval: 20,
        },
        yAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#8791af'
            },
          },
        },
        series: [
          {
            name: 'Score',
            type: 'bar',
            data: []
          }
        ]
      },
      dataInspectionLocation: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: [],
          orient: 'horizontal',
          left: 'center',
          textStyle: {
            color: '#999'
          }
        },
        color: ['#556ee6', '#f1b44c', '#f46a6a', '#50a5f1', '#34c38f'],
        series: [
          {
            name: 'Total',
            type: 'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: 'Laptop' },
              { value: 310, name: 'Tablet' },
              { value: 234, name: 'Mobile' },
              { value: 135, name: 'Others' },
              { value: 1548, name: 'Desktop' }
            ]
          }
        ]
      },
      dataTopInspectionLocation: [],
      dataWorstInspectionCategory: [],
      totInspection: 0,
      posObservation: 0,
      negObservation: 0,
    };
  },
  methods: {
    formatDate(date) {
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
    showAlert(text, type) {
      document.getElementById("alert-message").innerText = text;
      document.getElementById("alert-div").style.display = "block";
      document.getElementById("alert-div").classList.remove("alert-danger");
      document.getElementById("alert-div").classList.remove("alert-success");
      document.getElementById("alert-div").classList.add("alert-"+type);
    },
    hideAlert() {
      document.getElementById("alert-div").style.display = "none";
    },
    loadData() {
      this.isLoading1 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/svsu?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading1 = false
        console.log(result);
        this.dataObservation.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          this.dataObservation.series[0].data.push({
            value: result[i].total, name: result[i].category
          })
        }
      })
      .catch(error => {
        this.isLoading1 = false
        this.showAlert(error, "danger")
      })
      this.isLoading2 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/inspection?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading2 = false
        console.log(result);
        this.dataInspectionBar.xAxis[0].data = []
        this.dataInspectionBar.series[0].data = []
        this.dataInspectionBar.series[1].data = []
        this.totInspection = 0
        this.posObservation = 0
        this.negObservation= 0
        for (let i = 0; i < result.length; i++) {
          this.dataInspectionBar.xAxis[0].data.push(result[i].month)
          this.dataInspectionBar.series[0].data.push(result[i].inspection)
          this.dataInspectionBar.series[1].data.push(result[i].percentage)
          this.totInspection += result[i].inspection
          this.posObservation += result[i].pos
          this.negObservation += result[i].neg
        }
      })
      .catch(error => {
        this.isLoading2 = false
        this.showAlert(error, "danger")
      })
      this.isLoading3 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/types?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading3 = false
        console.log(result);
        this.dataSafeInspectionByRule.xAxis[0].data = []
        this.dataSafeInspectionByRule.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          this.dataSafeInspectionByRule.xAxis[0].data.push(result[i].name)
          this.dataSafeInspectionByRule.series[0].data.push(result[i].percentage)
        }
        this.dataSafeInspectionByRule.yAxis[0].min = result[result.length-1].percentage-result[result.length-1].percentage%25
        this.dataSafeInspectionByRule.yAxis[1].min = result[result.length-1].percentage-result[result.length-1].percentage%25
        this.dataWorstInspectionCategory = result.reverse().slice(0,5)
      })
      .catch(error => {
        this.isLoading3 = false
        this.showAlert(error, "danger")
      })
      this.isLoading4 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/company_inspection?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading4 = false
        console.log(result);
        this.dataInspectionByCompany.yAxis.data = []
        this.dataInspectionByCompany.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          if (this.$route.params.id==="dashboard"&&i===10){
            break
          }
          this.dataInspectionByCompany.yAxis.data.push(result[i].name)
          this.dataInspectionByCompany.series[0].data.push(result[i].total)
        }
        this.dataInspectionByCompany.yAxis.data.reverse()
        this.dataInspectionByCompany.series[0].data.reverse()
        this.listCompany = result.reverse()
      })
      .catch(error => {
        this.isLoading4 = false
        this.showAlert(error, "danger")
      })
      this.isLoading5 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/company?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading5 = false
        console.log(result);
        this.dataScoreByCompany.yAxis.data = []
        this.dataScoreByCompany.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          if (this.$route.params.id==="dashboard"&&i===10){
            break
          }
          this.dataScoreByCompany.yAxis.data.push(result[i].companies)
          this.dataScoreByCompany.series[0].data.push(result[i].total)
        }
        this.dataScoreByCompany.yAxis.data.reverse()
        this.dataScoreByCompany.series[0].data.reverse()
      })
      .catch(error => {
        this.isLoading5 = false
        this.showAlert(error, "danger")
      })
      this.isLoading6 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/inspector?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading6 = false
        console.log(result);
        this.dataInspectionByInspector.yAxis.data = []
        this.dataInspectionByInspector.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          if (this.$route.params.id==="dashboard"&&i===10){
            break
          }
          this.dataInspectionByInspector.yAxis.data.push(result[i].user)
          this.dataInspectionByInspector.series[0].data.push(result[i].total)
        }
        this.dataInspectionByInspector.yAxis.data.reverse()
        this.dataInspectionByInspector.series[0].data.reverse()
      })
      .catch(error => {
        this.isLoading6 = false
        this.showAlert(error, "danger")
      })
      this.isLoading7 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/inspector_score?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading7 = false
        console.log(result);
        this.dataScoreByInspector.yAxis.data = []
        this.dataScoreByInspector.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          if (this.$route.params.id==="dashboard"&&i===10){
            break
          }
          this.dataScoreByInspector.yAxis.data.push(result[i].name)
          this.dataScoreByInspector.series[0].data.push(result[i].total)
        }
        this.dataScoreByInspector.yAxis.data.reverse()
        this.dataScoreByInspector.series[0].data.reverse()
      })
      .catch(error => {
        this.isLoading7 = false
        this.showAlert(error, "danger")
      })
      this.isLoading8 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/areaus?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading8 = false
        console.log(result);
        this.dataInspectionLocation.legend.data = []
        this.dataInspectionLocation.series[0].data = []
        for (let i = 0; i < result.length; i++) {
          this.dataInspectionLocation.legend.data.push(result[i].name)
          this.dataInspectionLocation.series[0].data.push({
            name: result[i].name,
            value: result[i].total
          })
        }
      })
      .catch(error => {
        this.isLoading8 = false
        this.showAlert(error, "danger")
      })
      this.isLoading9 = true
      fetch(process.env.baseUrl + "/dashboard-v2/chart/areas?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading9 = false
        console.log(result);
        this.dataTopInspectionLocation = result.slice(0,5)
      })
      .catch(error => {
        this.isLoading9 = false
        this.showAlert(error, "danger")
      })
    },
    companyClicked (eventInfo) {
      if (this.$route.params.id==="complete-dashboard") {
        this.$router.push('/company/'+this.listCompany[eventInfo.dataIndex].slug)
      }
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
    <InsideLoading v-show="isLoading1&isLoading2&isLoading3&isLoading4&isLoading5&isLoading6&isLoading7&isLoading8&isLoading9"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
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
                      <b-badge :variant="selectedVariant" pill style="float:none">&nbsp;&nbsp;&nbsp;</b-badge>
                      <span class="ml-3" style="float:none;">{{selectedTitle}}</span>
                    </b-list-group-item>
                  </b-list-group>
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="p-0">
                <b-card-text>
                  <b-button block variant="light" class="m-0 py-2 px-3 bg-white" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="success" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 7 Days</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3 bg-white" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="warning" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">Last 30 Days</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3 bg-white" @click="changeDate($event.target.children[1].innerText)">
                    <b-badge variant="danger" pill>&nbsp;&nbsp;&nbsp;</b-badge>
                    <span class="ml-3">This Year</span>
                  </b-button>
                  <b-button block variant="light" class="m-0 py-2 px-3 bg-white" @click="changeDate($event.target.children[1].innerText)">
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
          <b-button variant="light" class="w-100 bg-white">
            <div class="title">Total Inspection</div>
            <div>{{totInspection}}</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100 bg-white">
            <div class="title">Positive Observation</div>
            <div>{{posObservation}}</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100 bg-white">
            <div class="title">Negative Observation</div>
            <div>{{negObservation}}</div>
          </b-button>
        </div>
        <div class="col-3 p-0">
          <b-button variant="light" class="w-100 bg-white">
            <div class="title">Total Observation</div>
            <div>{{posObservation+negObservation}}</div>
          </b-button>
        </div>
      </b-button-group>
    </div>

    <div class="row dataContent">
      <div class="col-6">
        <div class="title">Observations</div>
        <v-chart :options="dataObservation" autoresize />
      </div>
      <div class="col-6">
        <div class="title"># Inspections vs Report Score</div>
        <v-chart :options="dataInspectionBar" autoresize />
      </div>
    </div>
    <div class="row dataContent">
      <div class="col-12">
        <div class="title">Safe Inspection By Rules</div>
        <v-chart :options="dataSafeInspectionByRule" autoresize />
      </div>
    </div>
    <div class="row dataContent">
      <div class="col-6">
        <div class="title">Inspections by Company</div>
        <v-chart :options="dataInspectionByCompany" autoresize @click="companyClicked"/>
      </div>
      <div class="col-6">
        <div class="title">Average Score by Company</div>
        <v-chart :options="dataScoreByCompany" autoresize />
      </div>
    </div>
    <div class="row dataContent">
      <div class="col-6">
        <div class="title">Inspections by Inspector</div>
        <v-chart :options="dataInspectionByInspector" autoresize />
      </div>
      <div class="col-6">
        <div class="title">Average Score by Inspector</div>
        <v-chart :options="dataScoreByInspector" autoresize />
      </div>
    </div>
    <div class="row top5">
      <div class="col-6 title">Top 5 Inspections Location</div>
      <div class="col-6 title">Top 5 Categories (Of Issues)</div>
    </div>
    <div class="row dataContent">
      <div class="col-6">
        <b-list-group>
          <b-list-group-item v-for="c in dataTopInspectionLocation">
            {{c.name}}<span class="p-1"><b-badge variant="success">{{c.total}}</b-badge></span>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-6">
        <b-list-group>
          <b-list-group-item v-for="c in dataWorstInspectionCategory">
            {{c.name}}<span class="p-1"><b-badge variant="danger">{{c.total}}</b-badge></span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="row dataContent">
      <div class="col-12">
        <div class="title">Inspections Location</div>
        <v-chart :options="dataInspectionLocation" autoresize />
      </div>
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
  display: none;
}

.echarts, .echarts:first-child, canvas {
  width: auto !important;
}

.list-group-item span {
  float: right;
}
</style>
