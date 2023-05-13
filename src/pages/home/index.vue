<template>
  <AppPage>

    <template #header>
      <Header />
    </template>

    <template  v-slot:coin>
    </template>

  </AppPage>
</template>

<script setup lang="ts">
import AppPage from "@/pages/home/layout/index.vue"
import Header from '@/pages/home/components/header.vue';
</script>

<style scoped>

</style>
