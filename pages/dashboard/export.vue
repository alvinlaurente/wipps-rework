<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import InsideLoading from "@/components/InsideLoading";
export default {
  components: {InsideLoading},
  head() {
    return {
      title: "Export",
    };
  },
  data() {
    return {
      title: "Export",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Export",
          active: true,
        },
      ],
      token: localStorage.getItem('token'),
      baseUrl: process.env.baseUrl,
      from: "2020-01-01",
      to: "2020-12-31",
      isLoading: false
    };
  },
  methods: {
    loadPdfData(){
      fetch(process.env.baseUrl + "/export/all?from="+this.from+"&to="+this.to, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()
      })
      .then((result) => {
        this.isLoading = false
        let dataPdf = []
        for (let i = 0; i < result.length; i++) {
          let tmpArr = []
          tmpArr.push(result[i].name)
          tmpArr.push(result[i].safe)
          tmpArr.push(result[i].unsafe)
          tmpArr.push(result[i].sum)
          tmpArr.push(result[i].percent)
          dataPdf.push(tmpArr)
        }
        console.log(dataPdf);
        this.exportPDF(dataPdf)
      })
      .catch(error => {
        this.isLoading = false
        this.showAlert(error, "danger")
      })
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
    exportPDF(data){
      const pdf = new jsPDF()
      pdf.setProperties({
          title: 'Export Data',
          subject: 'local or shared file',
          creator: 'WIPPS'
      });

      pdf.setFontSize(12);

      var a = new Image()
      a.src = "../../_nuxt/assets/images/users/avatar-3.jpg"
      pdf.addImage(a, 'JPG', 16, 22, 65, 26)

      var b = new Image()
      b.src = "../../_nuxt/assets/images/users/avatar-4.jpg"
      pdf.addImage(b, 'JPG', 145.5, 33.5, 47.5, 11.5)

      pdf.text("Date range : 2020-01-01 - 2020-12-31", 14, 60.5)

      pdf.autoTable({
          startY: 70,
          styles:{textColor:'#000',fillColor:[255, 255, 255]},
          headStyles:{fontStyle:'bold',fontSize:'12'},
          bodyStyles:{lineColor:[255, 255, 255],fontSize:'12'},
          head: [['Permit to Work', 'Pos', 'Neg', 'Total', '%',]],
          body: data,
      })
      document.getElementById("Iframe").style.display = "block"

      setTimeout(function(){
          var dataPDF = pdf.output('datauri')
          document.getElementById("isiIframe").src = dataPDF
      }, 500)
    }
  },
  mounted: function () {
    document.getElementById("Iframe").style.display = "none";
  },
  middleware: [
    "authentication",'block-safety-man'
  ],
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert alert-dismissible fade show" role="alert" id="alert-div" style="display: none">
      <h6 style="margin: 0" id="alert-message"></h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- Calendar -->
    <div class="row mb-4">
      <div class="col-md-3">
        <span>Dari</span>
        <b-form-input type="date" v-model="from"></b-form-input>
      </div>
      <div class="col-md-3">
        <span>Sampai</span>
        <b-form-input type="date" v-model="to"></b-form-input>
      </div>
      <div class="col-md-6 mt-auto text-right">
        <b-button-group size="md">
          <b-button class="px-4" variant="danger" v-on:click="loadPdfData"><i class="mdi mdi-file-pdf">&nbsp;</i>Export</b-button>
          <a class="btn btn-success px-4" :href="this.baseUrl+'/export/all/excel?from='+this.from+'&to='+this.to+'&token='+this.token">
            <i class="mdi mdi-file-excel">&nbsp;</i>Export
          </a>
          <a class="btn btn-success px-4" :href="this.baseUrl+'/export/all/excel-form?from='+this.from+'&to='+this.to+'&token='+this.token">
            <i class="mdi mdi-file-excel">&nbsp;</i>Export Form Data
          </a>
        </b-button-group>
      </div>
    </div>

    <div class="row mb-3" id="Iframe">
      <div class="col-12">
        <iframe id="isiIframe" type="application/pdf" frameborder="1" style="width: 100%; height: 100vh;"></iframe>
      </div>
    </div>
  </div>
</template>
