<template>
  <v-container class="d-flex jjustify-space-between flex-wrap">
    <news-card
      v-for="item in news.slice(page * 5, page * 5 + 5)"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :author_id="item.author_id"
      :created_at="item.created_at"
      :image_src="item.image_src"
    />
    <div>
      <v-btn @click="decrementPage" :disabled="page === 0">Назад</v-btn>
      <v-btn @click="incrementPage" :disabled="newsLen / 5 === page + 1"
        >Дальше</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import NewsCard from "@/components/NewsCard.vue";
export default {
  name: "NewsPage",
  components: { NewsCard },
  data() {
    return {
      page: 0,
    };
  },

  methods: {
    incrementPage() {
      this.page = this.page + 1;
      console.log(this.newsLen / 5, this.page);
    },
    decrementPage() {
      if (this.page === 0) return;
      this.page = this.page - 1;
    },
  },
  computed: {
    ...mapGetters({
      news: "news/getNews",
      newsLen: "news/getNewsLen",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
