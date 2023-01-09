<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { news as newsData } from "@/store/database";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
  methods: {
    ...mapMutations({
      setNews: "news/setNews",
    }),
  },
  mounted() {
    this.setNews(newsData);
  },
});
</script>
