(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{414:function(t,e,r){"use strict";r.r(e);var l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=r(16),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},992:function(t,e,r){"use strict";r.r(e);var l=r(645),n=r.n(l),o=r(646),c=r.n(o),d={components:{ckeditor:n.a.component},head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{title:"Form editor",items:[{text:"Forms",href:"/"},{text:"Form editor",active:!0}],editor:c.a,editorData:"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>"}},middleware:"authentication"},m=r(16),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v("CK Editor")]),t._v(" "),r("p",{staticClass:"card-title-desc"},[t._v("\r\n                        Super simple wysiwyg editor on Bootstrap\r\n                    ")]),t._v(" "),r("ckeditor",{attrs:{editor:t.editor},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(414).default})}}]);