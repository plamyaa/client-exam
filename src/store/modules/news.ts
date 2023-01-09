import { IState } from "..";
import { Module } from "vuex";

export interface INews {
  id: number;
  titie: string;
  text: string;
  created_at: string;
  author_id: number;
  image_src: string;
}

export interface INewsState {
  data: INews[];
}

const news = {
  namespaced: true,
  store() {
    return {
      data: [],
    };
  },
  getters: {
    getNews(state: INewsState) {
      return state.data;
    },
  },
  mutations: {
    setNews(state: INewsState, news: INews[]) {
      state.data = news;
    },
  },
};

export default news;
