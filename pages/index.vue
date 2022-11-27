<script setup lang="ts">
const articles = ref<{ id: number, title: string }[]>([]);
articles.value = [{
  id: 1,
  title: "Nuxt3入門",
}, {
  id: 2,
  title: "Jest再入門",
}];
</script>

<template>
  <div>
    <header>Nuxt3サンプルアプリケーション</header>
    <div class="container">
      <p>新着記事！！</p>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <NuxtLink :to="{path: '/details', query: { id:article.id }}">{{
              article.title
            }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <footer>
      © 2022 mamezou-tech
    </footer>
  </div>
</template>

<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}
footer {
  margin-top: 2rem;
  background-color: #8080ee;
  padding: 1rem;
}
.container {
  margin: 2rem;
}
</style>