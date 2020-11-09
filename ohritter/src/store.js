import { createStore, createLogger } from "vuex";

const store = createStore({
  state: {
    email: "",
    isAuthenticated: false
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.email = userInfo.email;
      state.isAuthenticated = userInfo.isAuthenticated;
    }
  },
  plugins: [createLogger()]
});

export default store;
