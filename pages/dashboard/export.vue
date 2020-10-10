<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

export default {
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
    };
  },
  methods: {
    exportPDF(){
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
                body: [
                    ['Apakah kolom permohonan . . .', '160', '6', '166', '96.38%'],
                    ['Apakah kolom permohonan . . .', '160', '6', '166', '96.38%'],
                    ['Apakah kolom permohonan . . .', '160', '6', '166', '96.38%'],
                    ['Apakah kolom permohonan . . .', '160', '6', '166', '96.38%'],
                    // ...
                ],
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
    <PageHeader :title="title" :items="items" />

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
          <b-button variant="danger" v-on:click="exportPDF"><i class="far far fa-file-pdf">&nbsp;</i>Export</b-button>
          <a class="btn btn-success" :href="this.baseUrl+'/export/all/excel?from='+this.from+'&to='+this.to+'&token='+this.token">
            <i class="far fa-file-excel">&nbsp;</i>Export</a>
          <b-button variant="success"><i class="far fa-file-excel">&nbsp;</i>Export Form Data</b-button>
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
