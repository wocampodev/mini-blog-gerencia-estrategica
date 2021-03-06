<template>
  <a
    :href="link"
    target="_blank"
    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
  >
    {{ text }}
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    link: {
      type: String,
      default: "http://www.unprg.edu.pe/univ/"
    },
    text: {
      type: String,
      default: "Visitar"
    }
  }
});
</script>
