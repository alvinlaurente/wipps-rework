(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{414:function(t,e,o){"use strict";o.r(e);var l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},r=o(16),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:this.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},995:function(t,e,o){"use strict";o.r(e);o(259);var l={head:function(){return{title:"".concat(this.title," | Nuxtjs Responsive Bootstrap 4 Admin Dashboard")}},data:function(){return{title:"Form Repeater",items:[{text:"Forms",href:"/"},{text:"Form Repeater",active:!0}],fields:[{id:1}],phoneData:[{id:1}]}},methods:{AddformData:function(){this.fields.push({name:"",email:"",subject:"",message:""})},deleteRow:function(t){confirm("Are you sure you want to delete this element?")&&this.fields.splice(t,1)},AddPhoneNo:function(){this.phoneData.push({phone:""})},deletePhone:function(t){this.phoneData.splice(t,1)}},middleware:"authentication"},r=o(16),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title mb-4"},[t._v("Example")]),t._v(" "),o("form",{staticClass:"repeater",attrs:{enctype:"multipart/form-data"}},[o("div",t._l(t.fields,(function(e,l){return o("div",{key:e.id,staticClass:"row"},[o("div",{staticClass:"form-group col-lg-2"},[o("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"field.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"untyped-input"},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-2"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"field.email"}],staticClass:"form-control",attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{input:function(o){o.target.composing||t.$set(e,"email",o.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-2"},[o("label",{attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"field.subject"}],staticClass:"form-control",attrs:{id:"subject",type:"text"},domProps:{value:e.subject},on:{input:function(o){o.target.composing||t.$set(e,"subject",o.target.value)}}})]),t._v(" "),t._m(0,!0),t._v(" "),o("div",{staticClass:"form-group col-lg-2"},[o("label",{attrs:{for:"message"}},[t._v("Message")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"field.message"}],staticClass:"form-control",attrs:{id:"message"},domProps:{value:e.message},on:{input:function(o){o.target.composing||t.$set(e,"message",o.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-lg-2 align-self-center"},[o("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"button",value:"Delete"},on:{click:function(e){return t.deleteRow(l)}}})])])})),0),t._v(" "),o("input",{staticClass:"btn btn-success mt-3 mt-lg-0",attrs:{type:"button",value:"Add"},on:{click:t.AddformData}})])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title mb-4"},[t._v("Nested")]),t._v(" "),o("form",{staticClass:"outer-repeater"},[o("div",{staticClass:"outer"},[o("div",{staticClass:"outer"},[t._m(1),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"inner-repeater mb-4"},[o("div",{staticClass:"inner form-group"},[o("label",[t._v("Phone no :")]),t._v(" "),t._l(t.phoneData,(function(data,e){return o("div",{key:data.id,staticClass:"inner mb-3 row"},[o("div",{staticClass:"col-md-10 col-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:data.phone,expression:"data.phone"}],staticClass:"inner form-control",attrs:{type:"text",placeholder:"Enter your phone no..."},domProps:{value:data.phone},on:{input:function(e){e.target.composing||t.$set(data,"phone",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-md-2 col-4"},[o("input",{staticClass:"btn btn-primary btn-block inner",attrs:{type:"button",value:"Delete"},on:{click:function(o){return t.deletePhone(e)}}})])])}))],2),t._v(" "),o("input",{staticClass:"btn btn-success inner",attrs:{type:"button",value:"Add Number"},on:{click:t.AddPhoneNo}})]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group col-lg-2"},[e("label",{attrs:{for:"resume"}},[this._v("Resume")]),this._v(" "),e("input",{staticClass:"form-control-file",attrs:{id:"resume",type:"file"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formname"}},[this._v("Name :")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"formname",type:"text",placeholder:"Enter your Name..."}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formemail"}},[this._v("Email :")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"formemail",type:"email",placeholder:"Enter your Email..."}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"d-block mb-3"},[this._v("Gender :")]),this._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input",attrs:{id:"customRadioInline1",type:"radio",name:"customRadioInline1"}}),this._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customRadioInline1"}},[this._v("Male")])]),this._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input",attrs:{id:"customRadioInline2",type:"radio",name:"customRadioInline1"}}),this._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customRadioInline2"}},[this._v("Female")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formmessage"}},[this._v("Message :")]),this._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"formmessage",rows:"3"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:o(414).default})}}]);