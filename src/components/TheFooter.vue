<script lang="ts">
export default { name: "TheFooter" };
</script>

<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading"> Подписывайтесь на наши новости! </strong>

        <v-spacer></v-spacer>

        <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn> -->
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Сергеев Михаил 211-321</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
