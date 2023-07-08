<template>
  <div class="mx-auto mb-10 max-w-screen-xl overflow-hidden px-6 lg:px-1">
    <ArchiveHero />
    <div class="space-y-5 my-5">
      <template v-for="post in formatedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :published="post.published"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blogs').sort({ _id: -1 }).find())

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || '',
      description: articles.description || '',
      image: articles.image || '/nuxt-blog/no-image_cyyits.png',
      alt: articles.alt || '',
      ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
      date: articles.date || '',
      month: articles.month || '',
      year: articles.year || '',
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
  titleTemplate: 'Handri Hermawan - %s',
})
</script>