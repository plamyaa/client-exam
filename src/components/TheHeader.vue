<template>
  <v-toolbar color="grey d-flex" dark>
    <router-link to="/" class="ml-5">Главная</router-link>
    <router-link to="/news" class="ml-5">Все новости</router-link>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Подпишитесь на нас </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Подпишитесь на нашу новостную рассылку, чтобы всегда оставать в курсе
          последний событий! <br />
          Мы высылаем письмо с новостныйм дайджестом каждые 19 вечера.
        </v-card-text>
        <v-card class="mx-5">
          <v-form @submit.prevent="handleSubcribe">
            <v-text-field v-model="email" type="email" hide-details filled />
          </v-form>
        </v-card>
        <v-card class="d-flex ma-5 flex-column flex-sm-row" flat>
          <v-btn color="black" class="height" @click="handleSubcribe">
            Подписаться
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary my-4 my-sm-0" @click="dialog = false">
            Закрыть окно
          </v-btn>
        </v-card>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script lang="ts">
export default {
  name: "TheHeader",
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
      this.dialog = false;
    },
  },
};
</script>
