<template>
  <div class="bg-gray-100 font-sans">
    <BlogNavbar />
    <Nuxt class="pt-20 px-5 nuxt-content" />
    <BlogFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head() {
    return {
      title: "Gerencia Estratégica - Blog",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Este es un blog sobre Gerencia Estratégica"
        }
      ]
    };
  }
});
</script>
