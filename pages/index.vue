<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Personal blog by Handri Hermawan Cover about frontend development, web performance, design system and other.',
    },
  ],
  titleTemplate: 'Handri Hermawan - %s',
})
</script>

<template>
  <main class="container max-w-8xl mx-auto my-12">
    <MainHero />
    <MainRecent />
  </main>
</template>
