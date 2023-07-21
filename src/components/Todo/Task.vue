<template>
  <div>
    <v-list-item
      @click="$store.commit('markTask', task.id)"
      :class="{ 'blue lighten-5' : task.done }"
      :key="task.id"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through' : task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            @click.stop="dialogs.delete = true"
            icon
          >
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>

    </v-list-item>
    <v-divider></v-divider>

    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
import dialogDelete from "./Dialogs/DialogDelete.vue"

export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false
      }
    }
  },
  components: {
    dialogDelete,
  }
}
</script>