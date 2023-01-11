<template>
  <v-container class="d-flex justify-space-between flex-wrap flex-column">
    <p>Фильтры и сортировки:</p>
    <v-row class="mt-4 mx-0">
      <!-- <v-select
        v-model="date"
        :items="['По убыванию', 'По возрастанию']"
        label="Дата"
        filled
        class="col-5"
        style="width: 100%"
      /> -->
      <v-select
        v-model="author"
        :items="authors"
        item-value="id"
        item-title="name"
        label="Авторы"
        clearable
      />
    </v-row>
    <v-row>
      <news-card
        v-for="item in filterNewsByAuthor.slice(page * 5, page * 5 + 5)"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :text="item.text"
        :author_id="item.author_id"
        :created_at="item.created_at"
        :image_src="item.image_src"
      />
    </v-row>
    <v-row class="d-flex justify-center mb-5">
      <v-col cols="12">
        <v-btn @click="decrementPage" :disabled="page === 0" class="mr-3">
          Назад
        </v-btn>
        <v-btn
          @click="incrementPage"
          :disabled="
            filterNewsByAuthor.length / 5 === page + 1 ||
            filterNewsByAuthor.length / 5 <= 1
          "
        >
          Дальше
        </v-btn>
      </v-col>
    </v-row>
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
      activeSort: "",
      date: null,
      author: null,
    };
  },

  methods: {
    sortNewsByDte() {
      if (this.date === "По убыванию") {
        return this.news.sort((a, b) => b.created_at - a.created_at);
      } else if (this.date === "По возрастанию") {
        return this.news.sort((a, b) => b.created_at - a.created_at);
      }
      return this.news;
    },
    incrementPage() {
      this.page = this.page + 1;
    },
    decrementPage() {
      this.page = this.page - 1;
    },
  },
  computed: {
    ...mapGetters({
      authors: "authors/getAuthors",
      news: "news/getNews",
      newsLen: "news/getNewsLen",
    }),
    filterNewsByAuthor() {
      if (this.author === null) return this.news;
      return this.news.filter((news) => {
        if (news.author_id === this.author) return news;
      });
    },
  },
};
</script>
