<script setup lang="ts">
import { ref } from "vue";
import experiences from "@/assets/json/experience.json";

const items = ref(experiences);

useHead({
  title: "Experience",
  meta: [
    {
      name: "description",
      content: "All the experiences I have had so far.",
    },
  ],
  titleTemplate: "Handri Hermawan - %s",
});
</script>
<template>
  <div class="mx-auto my-12 max-w-screen-xl overflow-hidden px-6 xl:px-1">
    <ExperienceHero />
    <ExperienceCard
      v-for="item in items"
      :key="item.role"
      :role="item.role"
      :place="item.place"
      :date="item.date"
      :task="item.task"
      :stack="item.stack"
    />
  </div>
</template>
