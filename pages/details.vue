<script setup lang="ts">
const route = useRoute();
const { id } = route.query;
const { article, fetchArticle } = useArticles();
fetchArticle(+id);
</script>

<template>
  <div>
    <article v-if="article">
      <p>タイトル：{{ article.title }}</p>
      <hr />
      <div style="width: 500px">{{ article.content }}</div>
    </article>
    <NuxtLink to="/">戻る</NuxtLink>
    <!-- ↓追加 -->
    <Advertisement />
  </div>
</template>