<template>
  <div>
    <BlogHeader />
    <div>
      <h2 class="sub text-center text-xl text-green-700 uppercase pb-6">
        Últimas publicaciones
      </h2>
      <BlogCardPresentationArticle
        class="pt-4"
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      />
    </div>
  </div>
</template>

<script lang="js">
export default {
  layout: "blog",
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  async asyncData({ $content }) {
    const posts = await $content("posts").sortBy('createdAt', 'desc').fetch();
    return { posts };
  }
};
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
