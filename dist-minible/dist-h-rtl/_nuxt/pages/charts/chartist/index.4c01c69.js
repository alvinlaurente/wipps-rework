(window.webpackJsonp=window.webpackJsonp||[]).push([[26,25],{414:function(t,r,e){"use strict";e.r(r);var n={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},o=e(16),component=Object(o.a)(n,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[r("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);r.default=component.exports},682:function(t,r,e){"use strict";e.r(r),e.d(r,"smilAnimationChart",(function(){return n})),e.d(r,"simpleLineChart",(function(){return o})),e.d(r,"polarBarChart",(function(){return l})),e.d(r,"areaLineChart",(function(){return c})),e.d(r,"lineSmoothingChart",(function(){return d})),e.d(r,"overlappingBarChart",(function(){return h})),e.d(r,"stackBarChart",(function(){return C})),e.d(r,"horizontalBarChart",(function(){return v})),e.d(r,"donutAnimateChart",(function(){return m})),e.d(r,"simplePieChart",(function(){return f})),e.d(r,"distributedSeries",(function(){return _})),e.d(r,"labelPlacementChart",(function(){return y})),e.d(r,"extremeConfiguration",(function(){return B})),e.d(r,"lineAreaChart",(function(){return w}));e(19),e(15),e(12),e(24);var n={data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},options:{height:300}},o={data:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},options:{height:300,fullWidth:!0}},l={data:{labels:["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]},options:{height:300,high:10,low:-10,axisX:{labelInterpolationFnc:function(t,r){return r%2==0?t:null}}}},c={data:{labels:[1,2,3,4,5,6,7,8],series:[[5,9,7,8,5,3,5,4]]},options:{low:0,showArea:!0,height:300}},d={data:{labels:[1,2,3,4,5],series:[[1,5,10,0,1],[10,15,0,1,2]]},options:{height:300,low:0,fullWidth:!0,chartPadding:{right:20}}},h={data:{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[5,4,3,7,5,10,3,4,8,10,6,8],[3,2,9,5,4,6,4,6,7,8,7,4]]},options:{seriesBarDistance:10,height:300,responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]}},C={data:{labels:["Q1","Q2","Q3","Q4","Q5","Q6"],series:[[8e5,12e5,14e5,13e5,152e4,14e5],[2e5,4e5,5e5,3e5,452e3,5e5],[16e4,29e4,41e4,6e5,588e3,41e4]]},options:{stackBars:!0,axisY:{labelInterpolationFnc:function(t){return t/1e3+"k"}},height:300}},v={data:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},options:{seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:70},height:300}},m={data:{series:[10,20,50,20,5,50,15],labels:[1,2,3,4,5,6,7]},options:{donut:!0,showLabel:!1,height:300}},f={data:{series:[5,3,4]},options:{height:300,showLabel:!1}},_={data:{labels:["XS","S","M","L","XL","XXL","XXXL"],series:[20,60,120,200,180,20,10]},options:{height:300,distributeSeries:!0}},y={data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},options:{height:300,axisX:{position:"start"},axisY:{position:"end"}}},B={data:{labels:["Quarter 1","Quarter 2","Quarter 3","Quarter 4"],series:[[5,4,3,7],[3,2,9,5],[1,5,8,4],[2,3,4,6],[4,1,2,1]]},options:{height:300,axisX:{labelInterpolationFnc:function(t){return t.split(/\s+/).map((function(t){return t[0]})).join("")}},axisY:{offset:20},responsiveOptions:[["screen and (min-width: 400px)",{reverseData:!0,horizontalBars:!0,axisY:{offset:60}}],["screen and (min-width: 800px)",{stackBars:!1,seriesBarDistance:10}],["screen and (min-width: 1000px)",{reverseData:!1,horizontalBars:!1,seriesBarDistance:15}]]}},w={data:{labels:[1,2,3,4,5,6,7,8],series:[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,.5,1,.5,-1,-2.5]]},options:{height:300,high:3,low:-3,showArea:!0,showLine:!1,showPoint:!1,fullWidth:!0,axisX:{showLabel:!1,showGrid:!1}}}},979:function(t,r,e){"use strict";e.r(r);var n=e(682),o={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{smilAnimationChart:n.smilAnimationChart,simpleLineChart:n.simpleLineChart,polarBarChart:n.polarBarChart,areaLineChart:n.areaLineChart,lineSmoothingChart:n.lineSmoothingChart,overlappingBarChart:n.overlappingBarChart,stackBarChart:n.stackBarChart,horizontalBarChart:n.horizontalBarChart,donutAnimateChart:n.donutAnimateChart,simplePieChart:n.simplePieChart,distributedSeries:n.distributedSeries,labelPlacementChart:n.labelPlacementChart,extremeConfiguration:n.extremeConfiguration,lineAreaChart:n.lineAreaChart,title:"Chartist Charts",items:[{text:"Charts",href:"/"},{text:"Chartist Charts",active:!0}]}},middleware:"authentication"},l=e(16),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Advanced Smil Animations")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.smilAnimationChart.data,options:t.smilAnimationChart.options,type:"Line"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Simple Line Chart")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.simpleLineChart.data,options:t.simpleLineChart.options,type:"Line"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line Chart With Area")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.areaLineChart.data,options:t.areaLineChart.options,type:"Line"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Bi-polar Line Chart Wth Area Only")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.lineAreaChart.data,options:t.lineAreaChart.options,type:"Line"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line Interpolation / Smoothing")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",type:"Line",data:t.lineSmoothingChart.data,options:t.lineSmoothingChart.options}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Overlapping Bars On Mobile")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.overlappingBarChart.data,options:t.overlappingBarChart.options,type:"Bar"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Stacked Bar Chart")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.stackBarChart.data,options:t.stackBarChart.options,type:"Bar"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Horizontal Bar Chart")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.horizontalBarChart.data,options:t.horizontalBarChart.options,type:"Bar"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Distributed Series")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.distributedSeries.data,options:t.distributedSeries.options,type:"Bar"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Label Placement")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.labelPlacementChart.data,options:t.labelPlacementChart.options,type:"Bar"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Extreme Responsive Configuration")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.extremeConfiguration.data,options:t.extremeConfiguration.options,type:"Bar"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{dir:"ltr"}},[e("h4",{staticClass:"card-title mb-4"},[t._v("Bi-polar Bar Chart")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.polarBarChart.data,options:t.polarBarChart.options,type:"Bar"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Donut With Svg.animate")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.donutAnimateChart.data,options:t.donutAnimateChart.options,type:"Pie"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Simple Pie Chart")]),t._v(" "),e("chartist",{attrs:{ratio:"ct-chart",data:t.simplePieChart.data,options:t.simplePieChart.options,type:"Pie"}})],1)])])])],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{PageHeader:e(414).default})}}]);