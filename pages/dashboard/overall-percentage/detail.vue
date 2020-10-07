<script>
export default {
  head() {
    return {
      title: "Detail",
    };
  },
  data() {
    return {
      title: "Detail",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Overall Percentage",
        },
        {
          text: "Detail",
          active: true,
        },
      ],
      value: {
        value1: 96.55,
        value2: 98.14,
        value3: 65.14,
        value4: 30.28,
      },
    };
  },
  methods: {
    bgpill1() {
      let value1 = this.value.value1;
      if (value1 < 33.33) {
        document.getElementById("bgpill1").classList.add("bg-danger");
      } else if (value1 < 66.66) {
        document.getElementById("bgpill1").classList.add("bg-warning");
      } else if (value1 <= 100) {
        document.getElementById("bgpill1").classList.add("bg-success");
      }
    },
    bgpill2() {
      let value2 = this.value.value2;
      if (value2 < 33.33) {
        document.getElementById("bgpill2").classList.add("bg-danger");
      } else if (value2 < 66.66) {
        document.getElementById("bgpill2").classList.add("bg-warning");
      } else if (value2 <= 100) {
        document.getElementById("bgpill2").classList.add("bg-success");
      }
    },
    bgpill3() {
      let value3 = this.value.value3;
      if (value3 < 33.33) {
        document.getElementById("bgpill3").classList.add("bg-danger");
      } else if (value3 < 66.66) {
        document.getElementById("bgpill3").classList.add("bg-warning");
      } else if (value3 <= 100) {
        document.getElementById("bgpill3").classList.add("bg-success");
      }
    },
    bgpill4() {
      let value4 = this.value.value4;
      if (value4 < 33.33) {
        document.getElementById("bgpill4").classList.add("bg-danger");
      } else if (value4 < 66.66) {
        document.getElementById("bgpill4").classList.add("bg-warning");
      } else if (value4 <= 100) {
        document.getElementById("bgpill4").classList.add("bg-success");
      }
    },
  },
  mounted: function () {
    this.bgpill1();
    this.bgpill2();
    this.bgpill3();
    this.bgpill4();
  },
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <!-- Calendar -->
    <div class="row mb-3">
      <div class="col-12">
        <button class="btn btn-danger mr-2">Kembali</button>
        <button class="btn btn-success">Riwayat</button>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12 mb-3">
        <h4>PAKAIAN KERJA</h4>
        <b-list-group>
          <b-list-group-item
            >Coverall digunakan di area dalam kilang,area battery limit, dan
            pada pekerjaan dengan risiko tinggi sesuai standar penggunaan yang
            ditentukan
            <span class="p-1"
              ><b-badge id="bgpill1" :value="value.value1"
                >{{ value.value1 }}%</b-badge
              ></span
            ></b-list-group-item
          >
        </b-list-group>
      </div>

      <div class="col-12 mb-3">
        <h4>TOPI KESELAMATAN</h4>
        <b-list-group>
          <b-list-group-item
            >Permukaan tidak pecah / rusak
            <span class="p-1"
              ><b-badge id="bgpill2" :value="value.value2"
                >{{ value.value2 }}%</b-badge
              ></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Digunakan dengan benar
            <span class="p-1"
              ><b-badge id="bgpill3" :value="value.value3"
                >{{ value.value3 }}%</b-badge
              ></span
            ></b-list-group-item
          >
          <b-list-group-item
            >Dilengkapi dengan tali dagu
            <span class="p-1"
              ><b-badge id="bgpill4" :value="value.value4"
                >{{ value.value4 }}%</b-badge
              ></span
            ></b-list-group-item
          >
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.list-group-item span {
  float: right;
}
</style>
