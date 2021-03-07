<template>
  <div class="min-h-50 max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-4">
    <div class="pt-20 lg:col-span-1 space-y-3 w-full">
      <div class="border rounded shadow group bg-white">
        <BlogTableContent v-for="point in post.toc" :key="point.id" />
      </div>
    </div>
    <!--Container-->
    <div class="lg:container w-full py-20 lg:col-span-3">
      <div
        class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style="font-family:Georgia,serif;"
      >
        <!--Title-->
        <div class="font-sans">
          <p class="text-base md:text-sm text-green-500 font-bold">
            &lt;
            <NuxtLink
              to="/blog"
              class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >REGRESAR AL BLOG</NuxtLink
            >
          </p>
          <h1
            class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
          >
            {{ post.title }}
          </h1>
          <p class="text-sm md:text-base font-normal text-gray-600">
            Última actualización: {{ post.updatedAt | fechaPublicacion }}
          </p>
        </div>

        <!--Post Content-->
        <nuxt-content :document="post" />

        <!--Lead Para-->
        <p class="py-6">
          Lorem, ipsum.
          <a
            class="text-green-500 no-underline hover:underline"
            href="https://www.tailwindcss.com"
            >Lorem ipsum dolor sit amet.</a
          >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          reiciendis.
        </p>

        <h1 class="py-2">Heading 1</h1>
        <h2 class="py-2">Heading 2</h2>
        <h3 class="py-2">Heading 3</h3>
        <h4 class="py-2">Heading 4</h4>

        <blockquote
          class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
          pariatur?
        </blockquote>
        <!--/ Post Content-->
      </div>
    </div>
    <!--/container-->
  </div>
</template>

<script lang="js">
import { fechaPublicacion } from '~/util/fechas';
export default {
  layout: "blog",
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content("posts", params.slug)
        .sortBy("createdAt", "asc")
        .fetch();
      // console.log(post);
      return { post };
    } catch (e) {
      error(e);
    }
  },
  filters: {
      fechaPublicacion
  }
};
</script>

<style></style>
