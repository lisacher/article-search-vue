import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    loadingPage(state, userVote) {
      let userArray = JSON.parse(localStorage.getItem("userVote")) || [];
      userArray.push(userVote);
      localStorage.setItem(userVote.id, JSON.stringify(userArray));
    },
  },
  actions: {},
  getters: {
    getVoted: () => (voteId) => {
      return JSON.parse(localStorage.getItem(voteId));
    },
  },
});
