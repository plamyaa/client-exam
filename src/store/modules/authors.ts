import { IState } from "..";
import { Module } from "vuex";

export interface IAuthor {
  id: number;
  name: string;
}

export interface IAuthorState {
  data: IAuthor[];
}

const authors = {
  namespaced: true,
  store() {
    return {
      data: [],
    };
  },
  getters: {
    getAuthors(state: IAuthorState) {
      return state.data;
    },
    getAuthorById: (state: IAuthorState) => (id: number) => {
      return state.data.find((item) => item.id === id);
    },
  },
  mutations: {
    setAuthors(state: IAuthorState, authors: IAuthor[]) {
      state.data = authors;
    },
  },
};

export default authors;
