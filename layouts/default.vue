<template>
  <div class="h-container">
    <header class="fixed z-10 w-full">
      <MainHeader />
    </header>
    <main class="my-10">
      <slot />
    </main>
    <footer>
      <MainSocial />
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.h-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>