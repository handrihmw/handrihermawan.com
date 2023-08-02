<script setup lang="ts">
import type { Experiencedata } from "@/types/experience";

const props = withDefaults(defineProps<Experiencedata>(), {
  role: "This is Role",
  place: "This is Place",
  date: "This is Date",
  task: "This is Task",
  stack: ["This is Stack"],
});
</script>

<template>
  <article
    class="mb-4 flex max-w-screen-md flex-col gap-3 md:gap-10 overflow-hidden px-4 py-6 bg-transparent hover:rounded-lg hover:bg-slate-100/50 dark:hover:bg-cyan-950/50 dark:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-md sm:flex-col md:flex-row"
  >
    <div
      class="w-full pt-1 text-sm font-thin uppercase text-gray-700 dark:text-gray-400 md:w-1/5"
    >
      {{ props.date }}
    </div>
    <div class="w-4/5">
      <div class="flex flex-col gap-2">
        <div
          class="text-md flex flex-row flex-wrap gap-1 text-gray-800 dark:text-gray-300 md:flex-nowrap md:items-center md:gap-2"
        >
          <span>{{ props.role }}</span> • <span>{{ props.place }}</span>
        </div>
        <p class="text-sm text-gray-800 dark:text-gray-400">
          {{ props.task }}
        </p>
        <ul class="flex flex-wrap" aria-label="Technologies used">
          <li v-for="(stack, index) in props.stack" :key="index" class="mr-1.5 mt-2">
            <div
              class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
            >
              {{ stack }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

