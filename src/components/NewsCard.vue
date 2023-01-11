<template>
  <v-card class="mx-auto mb-5" max-width="430">
    <v-img height="200" :src="image_src" cover class="text-white" />
    <p class="text-h5 mx-4 mt-5">{{ title }}</p>
    <p v-if="description" class="text-subtitle-1 ma-4 text-grey">
      {{ description }}
    </p>
    <v-spacer></v-spacer>
    <v-card-actions>
      <router-link :to="`/newsPage/${id}`" class="text-decoration-none">
        <v-btn color="black lighten-2" text> Подробнее </v-btn>
      </router-link>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NewsCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    author_id: {
      type: Number,
      default: 0,
    },
    created_at: {
      type: String,
      default: "",
    },
    image_src: {
      type: String,
      default: "",
    },
  },
});
</script>
