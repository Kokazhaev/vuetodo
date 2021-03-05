<template>
  <div class="todoListGroup">
    <h1 class="date">{{ date }}</h1>
    <div v-for="todo in getTodos" :key="todo.id">
      <Todo :todo="todo" :todoList="getTodos" :todoGroup="getTodoGroup" />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "TodoListGroup",
  components: {
    Todo,
  },
  props: {
    date: String,
  },
  computed: {
    getTodos() {
      return this.$store.state.todos[this.date]
    },
    getTodoGroup() {
      return this.$store.state.todos
    }
  },
};
</script>

<style scoped>
.todoListGroup {
  text-align: left;
  margin-right: 80px;
  transition: 1s
}
.date {
  font-size: 20px;
  margin: 0 0 20px 10px;
}
</style>
