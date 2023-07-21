<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
import dialogDelete from "./Dialogs/DialogDelete.vue";

export default {
  components: { dialogDelete },
  props: { task: Object },
  data() {
    return {
      dialogs: {
        delete: false,
      },
      items: [
        {
          title: "Delete",
          icon: "mdi-delete",
          click() {
            this.dialogs.delete = true;
          },
        },
        { title: "Edit", icon: "mdi-pencil", click() {} },
        { title: "Due date", icon: "mdi-calendar", click() {} },
      ],
    };
  },
  methods: {
    handleClick(i) {
      this.items[i].click.call(this);
    },
  },
};
</script>

<style lang="scss" scoped></style>
