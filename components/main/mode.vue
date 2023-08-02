<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="flex items-center space-x-3 p-3 transition-all duration-300 ease-in-out cursor-pointer"
    @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-xl" />
      <Icon v-else name="heroicons-outline:sun" class="text-xl text-gray-800" />
    </ColorScheme>
  </button>
</template>


