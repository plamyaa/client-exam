<script lang="ts">
export default { name: "TheHeader" };
</script>

<template>
  <v-toolbar color="grey" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Новостной сайт</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>
