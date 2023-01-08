import { createStore } from "vuex";
import news, { INewsState } from "./modules/news";
export interface IState {
  news: INewsState;
}

export default createStore({
  modules: { news },
});
