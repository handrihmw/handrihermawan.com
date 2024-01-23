<script lang="ts" setup>
const { data } = await useAsyncData("recent-post", () =>
  queryContent("/blogs").limit(4).sort({ _id: -1 }).find()
);

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || "",
      description: articles.description || "",
      image: articles.image || "/nuxt-blog/no-image_cyyits.png",
      alt: articles.alt || "",
      ogImage: articles.ogImage || "/nuxt-blog/no-image_cyyits.png",
      date: articles.date || "",
      published: articles.published || false,
    };
  });
});

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "Personal blog by Handri Hermawan Cover about frontend development, web performance, design system and other.",
    },
  ],
  titleTemplate: "Handri Hermawan - %s",
});
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-6 xl:px-1">
    <div
      class="flex items-baseline justify-between text-gray-800 dark:text-gray-200 mt-10"
    >
      <h2 class="mb-6 text-xl font-base lg:text-2xl">Recent Post</h2>
      <div class="text-xs md:text-sm">
        <NuxtLink
          to="/blogs"
          class="flex items-center hover:border-b-2 hover:border-dotted"
        >
          View all Posts →
        </NuxtLink>
      </div>
    </div>
  </div>
  <div
    class="mx-auto mb-8 grid max-w-screen-xl grid-cols-1 px-6 md:grid-cols-2 xl:grid-cols-4 xl:px-1"
  >
    <template v-for="post in formatedData" :key="post.title">
      <BlogCard
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :image="post.image"
        :alt="post.alt"
        :og-image="post.ogImage"
        :published="post.published"
      />
    </template>
    <template v-if="data?.length === 0">
      <BlogEmpty />
    </template>
  </div>
</template>
