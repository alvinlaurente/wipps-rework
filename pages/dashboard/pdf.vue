<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "PDF",
        };
    },
    data() {
        return {
            title: "PDF",
            items: [{
                    text: "Dashboard",
                },
                {
                    text: "Beranda",
                    active: true,
                },
            ],
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
            
            pdf.output('dataurlnewwindow')
        }
    },
    mounted: function () {
    },
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <button class="btn btn-danger mb-5" v-on:click="exportPDF">Export</button>
</div>
</template>

<style scoped>
.btn-orange{
    background-color: #E55A02;
    color: white;
}

.btn-orange:hover{
    background-color: #bf4900;
}
</style>
