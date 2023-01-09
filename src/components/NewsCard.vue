<template>
  <v-card class="mx-auto mb-5" max-width="380">
    <v-img :src="image_src" height="300px" />
    <v-card-title> {{ title }}</v-card-title>
    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>
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
  methods: {},
});
</script>
