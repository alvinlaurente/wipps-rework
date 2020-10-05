<script>
export default {
  head() {
    return {
      title: "Data Awal"
    };
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <b-container>
      <b-row cols="12">
        <b-col>
          <b-card no-body class="mx-0">
            <b-tabs pills card class="customCard">
              <b-tab title="Tab 1" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Tab 2">
                <b-card-text>Tab contents 2</b-card-text>
              </b-tab>
              <b-tab title="Tab 3">
                <b-card-text>Tab contents 3</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.card-header-pills {
  margin: 0px;
}

.customCard .nav-link.active {
  background-color: #007bff !important;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

.customCard .nav-link:not(active) {
  border: 1px solid #007bff;
}

.customCard .nav-link.active:hover {
  border: 1px solid #007bff;
}

.customCard .nav-link:hover {
  background-color: #50a5f1;
  border: 1px solid #50a5f1;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}
</style>
