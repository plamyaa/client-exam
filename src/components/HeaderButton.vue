<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn color="black" v-bind="props"> Меню </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <router-link to="/" class="text-decoration-none">
          <v-btn flat>Главная</v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/news" class="text-decoration-none">
          <v-btn flat>Все новости</v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <a
          href="https://github.com/plamyaa/client-exam"
          class="text-decoration-none"
        >
          <v-btn flat> GIT </v-btn>
        </a>
      </v-list-item>
      <v-list-item>
        <a href="/db.json" class="text-decoration-none">
          <v-btn flat> JSON </v-btn>
        </a>
      </v-list-item>
      <v-list-item>
        <v-dialog
          v-model="dialog"
          max-width="500px"
          v-if="!$store.state.isAuth"
        >
          <template v-slot:activator="{ props }">
            <v-btn color="black" outlined v-bind="props"
              >Подпишитесь на нас</v-btn
            >
          </template>

          <v-card>
            <v-card-text>
              Подпишитесь на нашу новостную рассылку, чтобы всегда оставать в
              курсе последний событий! <br />
              Мы высылаем письмо с новостныйм дайджестом каждые 19 вечера.
            </v-card-text>
            <v-card class="mx-5">
              <v-form @submit.prevent="handleSubcribe">
                <v-text-field
                  v-model="email"
                  type="email"
                  hide-details
                  filled
                  label="Подпишитесь на нас!"
                  placeholder="example@gmail.com"
                  rounded
                  dense
                />
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
      </v-list-item>
      <v-list-item>
        <router-link
          v-if="!$store.state.isAuth"
          to="/auth"
          class="text-decoration-none"
        >
          <v-btn flat color="black">Войти</v-btn>
        </router-link>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
export default defineComponent({
  name: "HeaderButton",
  data() {
    return {
      email: "",
      dialog: false,
    };
  },
  methods: {
    ...mapMutations({
      setAuth: "setAuth",
    }),
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
      this.dialog = false;
    },
    toggleAuth() {
      this.setAuth(false);
    },
  },
});
</script>
