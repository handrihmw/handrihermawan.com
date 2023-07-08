<script setup lang="ts">
import { ref } from "vue";
import talks from "@/assets/json/talks.json";

const items = ref(talks);
</script>
<template>
  <div class="mx-auto mb-10 max-w-screen-xl overflow-hidden px-6 lg:px-1">
    <TalkHero />
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <TalkCard
      v-for="item in items"
      :key="item.title"
      :path="item.link"
      :title="item.title"
      :role="item.role"
      :date="item.date"
      :image="item.image"
      :alt="item.title"
    />
    </div>
  </div>
</template>