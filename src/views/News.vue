<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="9" class="mx-auto" v-if="!isEdit">
        <v-btn
          class="primary mb-5"
          @click="toggleEdit"
          v-if="$store.state.isAuth"
          >Редактировать</v-btn
        >
        <p class="text-h4">{{ news.title }}</p>
        <v-img :src="news.image_src" class="my-5" />
        <p>{{ news.text }}</p>
      </v-col>
      <v-col cols="12" md="9" class="mx-auto" v-else>
        <v-text-field v-model="news.title" />
        <v-img :src="news.image_src" class="my-5" />
        <v-textarea v-model="news.text" />
        <v-btn class="primary mt-5" @click="toggleEdit">
          Сохранить изменения
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MainNews",
  data() {
    return {
      isEdit: false,
      news: {
        title: "",
        text: "",
        image_src: "",
        author_id: "",
      },
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    const news = this.getNewsById(id); 
    if (!news) return;
    this.news = news;
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
  },
  computed: {
    ...mapGetters({
      getNewsById: "news/getNewsById",
    }),
  },
});
</script>

<style scoped></style>
