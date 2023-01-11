import { IState } from "..";
import { Module } from "vuex";

export interface INews {
  id: number;
  titie: string;
  text: string;
  description: string;
  created_at: string;
  author_id: number;
  image_src: string;
}

export interface INewsState {
  data: INews[];
  page: number;
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
    getNewsLen(state: INewsState) {
      return state.data.length;
    },
    getNewsById: (state: INewsState) => (id: number) => {
      return state.data.find((item) => item.id === id);
    },
  },
  mutations: {
    setNews(state: INewsState, news: INews[]) {
      state.data = news;
    },
  },
};

export default news;
