<template>
  <div class="mx-auto mb-8 mt-10 max-w-4xl px-8 py-6 xl:px-1">
    <header class="mt-10">
      <h1
        class="leading-25 mb-4 text-3xl text-gray-800 dark:text-gray-200 md:text-4xl"
      >
        {{ data.title || "" }}
      </h1>
      <p
        class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400"
      >
        <Icon name="heroicons-outline:calendar-days" class="text-lg" />
        Published {{ data.date || "" }}
      </p>
    </header>
    <div
      class="prose-xs prose prose prose-slate mx-auto max-w-4xl font-thin text-gray-800 dark:prose-invert sm:prose-sm md:prose-lg prose-headings:no-underline prose-a:text-gray-800 prose-a:no-underline prose-pre:max-w-xs prose-img:rounded-md dark:text-gray-300 dark:prose-a:text-gray-200 sm:prose-pre:max-w-full"
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
