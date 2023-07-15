<template>
  <div class="home">
    <v-list class="pt-0" flat>
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
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
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
  },
  data: () => ({
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Buy groceries",
        done: false,
      },
      {
        id: 3,
        title: "Make dinner",
        done: false,
      },
    ],
  }),
};
</script>
