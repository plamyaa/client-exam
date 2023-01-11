import authors, { IAuthorState } from "./modules/authors";
import { createStore } from "vuex";
import news, { INewsState } from "./modules/news";
export interface IState {
  news: INewsState;
  authors: IAuthorState;
  isAuth: boolean;
}

export default createStore({
  state: {
    isAuth: false,
  } as IState,
  getters: {
    getAuth(state) {
      return state.isAuth;
    },
  },
  mutations: {
    setAuth(state, auth: boolean) {
      state.isAuth = auth;
    },
  },
  modules: { news, authors },
});
