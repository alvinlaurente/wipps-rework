(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1005:function(t,e,l){"use strict";l.r(e);var n={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{title:"Invoice List",items:[{text:"Invoices"},{text:"Invoice List",active:!0}],invoicelist:[{id:"#MN0131",date:"10 Jul, 2020",name:"Connie Franco",amount:"$141",status:"Paid"},{id:"#MN0130",date:"09 Jul, 2020",name:"Paul Reynolds",amount:"$153",status:"Paid"},{id:"#MN0129",date:"09 Jul, 2020",name:"Ronald Patterson",amount:"$220",status:"Pending"},{id:"#MN0128",date:"08 Jul, 2020",name:"Adella Perez",amount:"$175",status:"Paid"},{id:"#MN0127",date:"07 Jul, 2020",name:"Theresa Mayers",amount:"$160",status:"Paid"},{id:"#MN0126",date:"06 Jul, 2020",name:"Michael Wallace",amount:"$150",status:"Paid"},{id:"#MN0125",date:"05 Jul, 2020",name:"Oliver Gonzales",amount:"$165",status:"Pending"},{id:"#MN0124",date:"05 Jul, 2020",name:"David Burke",amount:"$170",status:"Paid"},{id:"#MN0123",date:"04 Jul, 2020",name:"Willie Verner",amount:"$140",status:"Pending"},{id:"#MN0122",date:"03 Jul, 2020",name:"Felix Perry",amount:"$155",status:"Paid"},{id:"#MN0121",date:"02 Jul, 2020",name:"Virgil Kelley",amount:"$165",status:"Paid"},{id:"#MN0120",date:"02 Jul, 2020",name:"Matthew Lawler",amount:"$170",status:"Pending"}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"check",label:""},{key:"id",label:"Invoice Id",sortable:!0},{key:"date",sortable:!0},{key:"name",label:"Billing Name",sortable:!0},{key:"amount",sortable:!0},{key:"status",label:"Payment Status",sortable:!0},{key:"download",label:"Download Pdf"},"action"]}},computed:{rows:function(){return this.invoicelist.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"authentication"},r=l(16),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\r\n                    Show \r\n                    "),l("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\r\n                ")],1)])]),t._v(" "),l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\r\n                    Search:\r\n                    "),l("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),t._v(" "),l("div",{staticClass:"table-responsive mb-0"},[l("b-table",{attrs:{"table-class":"table table-centered datatable table-card-list","thead-tr-class":"bg-transparent",items:t.invoicelist,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(data){return[l("div",{staticClass:"custom-control custom-checkbox text-center"},[l("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+data.item.id}}),t._v(" "),l("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+data.item.id}})])]}},{key:"cell(id)",fn:function(data){return[l("a",{staticClass:"text-dark font-weight-bold",attrs:{href:"javascript: void(0);"}},[t._v("\r\n                    "+t._s(data.item.id)+"\r\n                ")])]}},{key:"cell(status)",fn:function(data){return[l("div",{staticClass:"badge badge-pill badge-soft-success font-size-12",class:{"badge-soft-warning":"Pending"===data.item.status}},[t._v(t._s(data.item.status))])]}},{key:"cell(name)",fn:function(data){return[l("a",{staticClass:"text-body",attrs:{href:"#"}},[t._v(t._s(data.item.name))])]}},{key:"cell(download)",fn:function(){return[l("div",[l("button",{staticClass:"btn btn-light btn-sm w-xs"},[t._v("\r\n                        Pdf\r\n                        "),l("i",{staticClass:"uil uil-download-alt ml-2"})])])]},proxy:!0},{key:"cell(action)",fn:function(){return[l("ul",{staticClass:"list-inline mb-0"},[l("li",{staticClass:"list-inline-item"},[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-primary",attrs:{href:"javascript:void(0);",title:"Edit"}},[l("i",{staticClass:"uil uil-pen font-size-18"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-danger",attrs:{href:"javascript:void(0);",title:"Delete"}},[l("i",{staticClass:"uil uil-trash-alt font-size-18"})])])])]},proxy:!0}])})],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[l("ul",{staticClass:"pagination pagination-rounded"},[l("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",[e("button",{staticClass:"btn btn-success mb-3",attrs:{type:"button"}},[e("i",{staticClass:"mdi mdi-plus mr-1"}),this._v(" Add Invoice\r\n                ")])])]),this._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"float-right"},[e("div",{staticClass:"form-inline mb-3"},[e("div",{staticClass:"input-daterange input-group",attrs:{"data-provide":"datepicker","data-date-format":"dd M, yyyy","data-date-autoclose":"true"}},[e("input",{staticClass:"form-control text-left",attrs:{type:"text",placeholder:"From",name:"From"}}),this._v(" "),e("input",{staticClass:"form-control text-left",attrs:{type:"text",placeholder:"To",name:"To"}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("i",{staticClass:"mdi mdi-filter-variant"})])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(414).default})},414:function(t,e,l){"use strict";l.r(e);var n={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},r=l(16),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);