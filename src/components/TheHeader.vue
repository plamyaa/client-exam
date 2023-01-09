<script lang="ts">
export default { name: "TheHeader" };
</script>

<template>
  <v-toolbar color="grey d-flex" dark>
    <router-link to="/" class="ml-5">Главная</router-link>
    <router-link to="/news" class="ml-5">Все Новости</router-link>
  </v-toolbar>
</template>
