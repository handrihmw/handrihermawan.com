<script lang="ts" setup>
interface Props {
  path: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  ogImage: string;
  published: boolean;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "This is Title",
  date: "00",
  description: "This is Description",
  image: "/nuxt-blog/no-image_cyyits.png",
  alt: "This is Alt",
  ogImage: "/nuxt-blog/no-image_cyyits.png",
  published: false,
});
</script>

<template>
  <article
    class="group m-2 overflow-hidden rounded-md dark:bg-gray-800 shadow-sm mb-4 border border-gray-200 dark:border-gray-700 lg:mb-0"
  >
    <NuxtLink :to="path">
      <NuxtImg
        class="w-full rounded-t-md object-cover object-center transition-all duration-500 group-hover:scale-105 md:h-36 lg:h-48"
        :src="image"
        :alt="alt"
      />
      <div class="flex flex-col px-3 pb-6">
        <p class="text-xs text-gray-700 dark:text-gray-200 mt-5 font-light">{{ date }}</p>
        <h2
          class="line-clamp-2 text-ellipsis text-lg text-gray-800 dark:text-gray-200 my-3"
        >
          {{ title }}
        </h2>
        <p class="line-clamp-2 text-ellipsis text-xs text-gray-800 dark:text-gray-200">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
