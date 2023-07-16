<template>
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
</template>

<script>
export default {
  data: () => ({
    newTaskTitle: "",
  }),
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>
