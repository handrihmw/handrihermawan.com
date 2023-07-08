<template>
  <div class="mx-auto mb-8 mt-10 max-w-5xl px-8 py-6 lg:px-1">
    <header class="mt-10">
      <h1
        class="leading-25 mb-4 text-4xl font-thin text-gray-800 dark:text-gray-200"
      >
        {{ data.title || "" }}
      </h1>
      <p class="text-sm text-gray-700 dark:text-gray-300">
        Published {{ data.date || "" }}
      </p>
    </header>
    <div
      class="prose dark:prose-invert font-thin prose-slate prose prose-xs mx-auto max-w-5xl text-gray-800 sm:prose-sm md:prose-lg prose-headings:no-underline prose-a:no-underline prose-a:text-gray-800 prose-pre:max-w-xs prose-img:rounded-md dark:text-gray-300 dark:prose-a:text-gray-200 sm:prose-pre:max-w-full"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </div>
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
