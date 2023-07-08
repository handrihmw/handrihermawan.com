<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  month: string
  year: string
  description: string
  image: string
  alt: string
  ogImage: string
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "This is Title",
  date: "This is Date",
  month: "Apr",
  year: "2023",
  description: "This is Description",
  image: "/nuxt-blog/no-image_cyyits.png",
  alt: "This is Alt",
  ogImage: "/nuxt-blog/no-image_cyyits.png",
  published: false,
})
</script>

<template>
  <article class="group m-2 overflow-hidden">
    <NuxtLink :to="path" class="grid grid-cols-1 gap-1 sm:grid-cols-10 group-hover:opacity-90">
      <div
        class="inline-block content-center pt-3 pb-4 text-left sm:col-span-1"
      >
        <div class="text-2xl text-gray-800 dark:text-gray-300 font-light uppercase">
          {{ month }}
        </div>
        <div class="text-md text-gray-800 dark:text-gray-300 font-light">
          {{ year }}
        </div>
      </div>
      <div class="py-2 sm:col-span-8">
        <h2 class="line-clamp-1 text-ellipsis pb-1 text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-fuchsia-500">
          {{ title }}
        </h2>
        <p
          class="line-clamp-1 text-ellipsis text-sm font-extralight text-gray-700 dark:text-gray-400"
        >
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
