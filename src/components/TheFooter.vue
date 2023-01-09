<script lang="ts">
export default { name: "TheFooter" };
</script>

<template>
  <v-footer padless color="grey">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>
