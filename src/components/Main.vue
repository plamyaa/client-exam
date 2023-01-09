<template>
  <the-header />
  <v-container class="d-flex jjustify-space-between flex-wrap">
    <news-card
      v-for="item in news"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :author_id="item.author_id"
      :created_at="item.created_at"
      :image_src="item.image_src"
    />
  </v-container>
  <the-footer />
</template>

<script lang="ts">
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import { mapGetters } from "vuex";
import NewsCard from "./NewsCard.vue";
export default {
  components: { TheHeader, TheFooter, NewsCard },
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
