<script>
import {
    layoutComputed
} from "~/store/helpers";

import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
    components: {
        Vertical,
        Horizontal,
    },
    computed: {
        ...layoutComputed,
    },
    mounted() {
      let els = document.getElementsByClassName("title")
      for (let i = 0; i < els.length; i++) {
        if (els[i].innerText==="This page could not be found"){
          this.$router.push({
            path: "/404",
          });
        }
      }
      document.body.classList.remove("authentication-bg");
    },
};
</script>

<template>
<div>
    <!-- Begin page -->
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
        <Nuxt />
    </Vertical>
    <!-- END layout-wrapper -->

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
        <slot />
    </Horizontal>
</div>
</template>
