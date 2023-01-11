<template>
  <v-container class="auth d-flex justify-center">
    <v-col cols="12" md="8">
      <v-card class="pa-4">
        <p class="text-h4 my-3">Войдите в свой аккаунт</p>
        <v-form>
          <v-text-field
            v-model="login"
            type="text"
            placeholder="login"
            label="Введите логин"
          />
          <v-text-field
            v-model="password"
            type="password"
            placeholder="0000"
            label="Введите пароль"
          />
          <v-btn @click="handleSubmit" color="primary">Войти</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "AuthPage",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setAuth"]),
    handleSubmit() {
      if (this.login === "login" && this.password === "0000") {
        this.$router.push("/");
        this.setAuth(true);
      } else {
        alert("Неправильный логин или пароль!");
      }
    },
  },
});
</script>

<style scoped></style>
