import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
  },
  mutations: {
    markTask(state, taskId) {
      const task = state.tasks.filter((task) => task.id === taskId)[0];
      task.done = !task.done;
    },
    addTask(state, newTaskTitle) {
      const nextId = state.tasks.length + 1;
      state.tasks.push({ id: nextId, title: newTaskTitle, done: false });
    },
    deleteTask(state, taskId) {
      state.tasks.splice((task) => task.id === taskId, 1);
    },
  },
  actions: {
  },
  modules: {
  }
})
