import { createStore, action } from "easy-peasy";

export const store = createStore({
  activesongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActivesong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
});
