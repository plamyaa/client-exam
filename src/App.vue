<template>
  <v-app>
    <v-main class="d-flex flex-column">
      <the-header />
      <router-view style="max-width: 1440px; margin: auto; flex: 1" />
      <the-footer style="flex: 0" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import { GET } from "@/api/axios-api";
export default defineComponent({
  name: "App",
  components: { TheHeader, TheFooter },
  methods: {
    ...mapMutations({
      setNews: "news/setNews",
    }),
  },
  async mounted() {
    const { data } = await GET("/news");
    this.setNews(data);
  },
});
</script>
