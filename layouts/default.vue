<template>
  <div class="h-container font-outfit bg-gradient-to-b from-gray-100 dark:from-gray-900 via-slate-200 dark:via-cyan-950 to-slate-100 dark:to-cyan-900">
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
  width: fit-content;

  @media (min-width: 1023px) {
    width: 100%;
  }
}
</style>