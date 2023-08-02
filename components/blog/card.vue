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
    class="group m-2 overflow-hidden bg-slate-100 drop-shadow-md dark:bg-cyan-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-cyan-950/50 dark:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:mb-0"
  >
    <NuxtLink :to="path">
      <NuxtImg
        class="w-full rounded-t-md object-cover object-center transition-all duration-500 group-hover:scale-105 md:h-36 lg:h-48"
        :src="image"
        :alt="alt"
      />
      <div class="flex flex-col px-4 pb-6">
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
