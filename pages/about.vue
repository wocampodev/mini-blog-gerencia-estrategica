<template>
  <div class="min-h-screen">
    <BlogHeader>
      <template #external-link>
        <BlogButtonExternal></BlogButtonExternal>
      </template>
    </BlogHeader>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogButtonExternal from "~/components/blog/util/BlogButtonExternal.vue";
export default Vue.extend({
  components: { BlogButtonExternal },
  name: "About",
  layout: "blog",
});
</script>
