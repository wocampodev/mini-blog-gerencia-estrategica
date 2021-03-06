<template>
  <div>
    <BlogNavbar />
    <BlogHeader />
    <Nuxt class="min-h-50" />
    <BlogFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style>
.min-h-50 {
  min-height: 50vh;
}
</style>
