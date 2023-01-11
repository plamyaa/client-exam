<template>
  <v-footer
    padless
    color="grey"
    class="d-flex flex-column flex-md-row justify-space-between px-0 pa-md-5"
  >
    <v-card
      class="pa-0 text-center d-flex flex-column align-center justify-center"
      flat
      color="grey"
    >
      {{ new Date().getFullYear() }} — Сергеев Михаил 211-321
    </v-card>
    <v-col md="6">
      <v-card class="pa-0 text-center text-md-left" cols="5" flat color="grey">
        <v-form
          @submit.prevent="handleSubcribe"
          class="d-flex flex-column flex-md-row align-center mt-4 mt-md-0"
        >
          <v-text-field
            v-model="email"
            style="width: 100%"
            type="email"
            d-block
            hide-details
            label="Подпишитесь на нас!"
            placeholder="example@gmail.com"
            filled
            rounded
            dense
          />
          <v-btn color="black" class="mt-4 mt-md-0" @click="handleSubcribe">
            Подписаться
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TheFooter",
  data() {
    return {
      email: "",
      dialog: false,
    };
  },
  methods: {
    handleSubcribe() {
      if (!this.email.includes("@")) {
        alert("Пожалуйства введите корректный адрес вашей почты");
        return;
      }
      const validation = this.email.split("@")[1];
      if (!validation) {
        alert("Пожалуйства введите корректный адрес вашей почты");
        return;
      }
      alert("Спасибо за подписку!");
      this.email = "";
    },
  },
});
</script>
