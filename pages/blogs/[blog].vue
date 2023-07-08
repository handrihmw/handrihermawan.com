<template>
  <main
    class="mx-auto mb-8 max-w-screen-xl px-8 py-6 lg:px-1 mt-5"
  >
    <header>
      <h1 class="leading-25 mb-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
        {{ data.title || "" }}
      </h1>
      <p class="text-sm text-gray-700 dark:text-gray-300">
        Published {{ data.date || "" }}
      </p>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc prose-img:rounded-lg text-gray-800 dark:text-gray-400"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

const { path } = useRoute();
const articles = await queryContent(path).findOne();

const data = computed<BlogPost>(() => {
  return {
    title: articles.title || "",
    description: articles.description || "",
    image: articles.image || "/nuxt-blog/no-image_cyyits.png",
    alt: articles.alt || "",
    ogImage: articles.ogImage || "/nuxt-blog/no-image_cyyits.png",
    date: articles.date || "",
    published: articles.published || false,
  };
});

useHead({
  title: data.value.title || "",
  meta: [
    { name: "description", content: data.value.description },
    {
      name: "description",
      content: data.value.description,
    },
    { property: "og:site_name", content: "Handri Hermawan" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://handrihermawan.com/${path}`,
    },
    {
      property: "og:title",
      content: data.value.title,
    },
    {
      property: "og:description",
      content: data.value.description,
    },
    {
      property: "og:image",
      content: data.value.ogImage || data.value.image,
    },
    { name: "twitter:site", content: "@handrihmw" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: `https://handrihermawan.com/${path}`,
    },
    {
      name: "twitter:title",
      content: data.value.title,
    },
    {
      name: "twitter:description",
      content: data.value.description,
    },
    {
      name: "twitter:image",
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://handrihermawan.com/${path}`,
    },
  ],
});
</script>
