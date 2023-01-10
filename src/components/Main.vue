<template>
  <v-container class="d-flex justify-space-around flex-wrap">
    <news-card
      v-for="item in news.slice(0, 6)"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :author_id="item.author_id"
      :created_at="item.created_at"
      :image_src="item.image_src"
    />
  </v-container>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import NewsCard from "./NewsCard.vue";
export default {
  components: { NewsCard },
  name: "AppMain",
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      news: "news/getNews",
    }),
  },
};
</script>
