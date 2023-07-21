import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    snackbar: {
      visible: false,
      message: "",
    },
  },
  getters: {},
  mutations: {
    markTask(state, taskId) {
      const task = state.tasks.filter((task) => task.id === taskId)[0];
      task.done = !task.done;
    },
    addTask(state, newTaskTitle) {
      const nextId = state.tasks.length + 1;
      state.tasks.unshift({ id: nextId, title: newTaskTitle, done: false });
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    showSnackbar(state, text) {
      let timeout = 0;

      if (state.snackbar.visible) {
        state.snackbar.visible = false;
        timeout = 200;
      }
      setTimeout(() => {
        state.snackbar.message = text;
        state.snackbar.visible = true;
      }, timeout);
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task added!");
    },
    deleteTask({ commit }, taskId) {
      commit("deleteTask", taskId);
      commit("showSnackbar", "Task deleted!");
    },
  },
  modules: {},
});
