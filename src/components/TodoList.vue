<template>
  <div>
    <div class="todoList" v-if="getTodoKeys.length > 0">
      <div v-for="date in getTodoKeys" :key="date">
        <TodoListGroup :date="date" />
      </div>
    </div>
    <div v-else>Список задач пуст</div>
  </div>
</template>

<script>
import TodoListGroup from "./TodoListGroup";

export default {
  name: "TodoList",
  components: {
    TodoListGroup,
  },
  computed: {
    getTodoKeys() {
      return Object.keys(this.$store.state.todos);
    },
  },
};
</script>

<style scoped>
.todoList {
  display: flex;
  align-items: baseline;
  overflow: scroll;
  padding-bottom: 100px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.todoList::-webkit-scrollbar {
  display: none;
}

</style>
