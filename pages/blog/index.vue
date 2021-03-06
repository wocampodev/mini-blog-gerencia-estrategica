<template>
  <div>
    <BlogHeader />
    <div class="min-h-50 max-w-7xl mx-auto">
      <h2 class="sub text-center text-xl text-green-700 uppercase pb-6">
        Últimas publicaciones
      </h2>
      <BlogCardPresentationArticle
        class="pt-4 bg-green-50"
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
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params.slug).sortBy('createdAt', 'asc').fetch();
    console.log(posts);
    return { posts };
  }
};
</script>
