<script setup lang="ts">
import type { Experiencedata } from "@/types/experience";

const props = withDefaults(defineProps<Experiencedata>(), {
  role: "This is Role",
  place: "This is Place",
  date: "This is Date",
  task: "This is Task",
});
</script>

<template>
  <article
    class="mb-4 overflow-hidden rounded-lg border max-w-screen-lg border-gray-400 border-opacity-30 bg-transparent shadow-sm dark:bg-gray-800"
  >
    <div class="px-4 pb-6 pt-5">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-300">
        {{ props.role }}
      </h2>
      <p class="mt-3 flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300">
        <Icon name="heroicons-outline:briefcase" class="text-xl text-gray-800 dark:text-gray-300" /> {{ props.place }}
      </p>
      <p class="mt-2 flex items-center gap-2 text-xs text-gray-700 dark:text-gray-400">
        <Icon name="heroicons-outline:calendar-days" class="text-xl text-gray-700 dark:text-gray-400" /> {{ props.date }}
      </p>
      <p class="mt-3 text-sm text-gray-800 dark:text-gray-400">
        {{ props.task }}
      </p>
    </div>
  </article>
</template>
