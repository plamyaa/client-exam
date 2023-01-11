<template>
  <v-toolbar color="grey d-flex" dark v-if="width === 'sm' || width === 'xs'">
    <header-button />
  </v-toolbar>
  <v-toolbar color="grey d-flex" dark v-else>
    <router-link to="/" class="ml-5 text-decoration-none">
      <v-btn flat color="black">Главная</v-btn>
    </router-link>
    <router-link to="/news" class="text-decoration-none">
      <v-btn flat color="black">Все новости</v-btn>
    </router-link>
    <a
      href="https://github.com/plamyaa/client-exam"
      class="text-decoration-none"
    >
      <v-btn flat color="black"> GIT </v-btn>
    </a>
    <a href="/db.json" class="text-decoration-none">
      <v-btn flat color="black"> JSON </v-btn>
    </a>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog" max-width="500px" v-if="!$store.state.isAuth">
      <template v-slot:activator="{ props }">
        <v-btn color="black" outlined v-bind="props">Подпишитесь на нас</v-btn>
      </template>

      <v-card>
        <v-card-text>
          Подпишитесь на нашу новостную рассылку, чтобы всегда оставать в курсе
          последний событий! <br />
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
    <router-link
      v-if="!$store.state.isAuth"
      to="/auth"
      class="text-decoration-none"
    >
      <v-btn flat color="black">Войти</v-btn>
    </router-link>
    <v-btn v-else @click="toggleAuth">Выйти</v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapMutations } from "vuex";
import { useDisplay } from "vuetify";
import { computed } from "vue";
import HeaderButton from "./HeaderButton.vue";
export default defineComponent({
  name: "TheHeader",
  components: { HeaderButton },
  data() {
    return {
      email: "",
      dialog: false,
    };
  },
  setup() {
    const { name } = useDisplay();
    const width = computed(() => {
      return name.value;
    });
    return { width };
  },
  methods: {
    ...mapMutations({
      setAuth: "setAuth",
    }),
    handleSubcribe() {
      console.log(this.width);
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
