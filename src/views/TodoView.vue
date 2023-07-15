<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      outlined
      label="Task"
      append-icon="mdi-plus"
      hide-details
      clearable
      class="pa-4"
    ></v-text-field>
    <v-list v-if="tasks.length" class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          class="py-1 px-4"
          @click="markTask(task.id)"
          :class="{ 'blue lighten-4': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-tasks">
      <v-icon size="100" color="primary"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    markTask(taskId) {
      const task = this.tasks.filter((task) => task.id === taskId)[0];
      task.done = !task.done;
    },
    deleteTask(taskId) {
      this.tasks.splice((task) => task.id === taskId, 1);
    },
    addTask() {
      const nextId = this.tasks.length + 1;
      this.tasks.push({ id: nextId, title: this.newTaskTitle, done: false });
      this.newTaskTitle = "";
    },
  },
  data: () => ({
    newTaskTitle: "",
    tasks: [],
  }),
};
</script>

<style lang="scss">
.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
