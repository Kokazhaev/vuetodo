<template>
  <label class="todo">
    <input
      type="checkbox"
      id="checkbox"
      :checked="todo.done"
      v-model="todo.done"
      @change="sorting"
    />
    <p :class="[todo.done ? 'checked' : '']">{{ todo.title }}</p>
  </label>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      title: String,
      done: Boolean,
      id: Number,
    },
    todoList: [],
    todoGroup: {},
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    sorting() {
      if (this.todo.done) {
        const getTodos = this.todoList.filter((el) => el.id !== this.todo.id);
        getTodos.push(this.todo);
        const newGroup = { ...this.todoGroup, [this.todo.date]: getTodos };
        this.$store.dispatch("sortList", newGroup);
      } else {
        const done = this.todoList.filter((el) => el.done);
        const notDone = this.todoList.filter((el) => !el.done);
        const newGroup = {
          ...this.todoGroup,
          [this.todo.date]: [...notDone, ...done],
        };
        this.$store.dispatch("sortList", newGroup);
      }
    },
  },
};
</script>

<style scoped>
.todo {
  max-width: 300px;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
}
#checkbox {
  margin-right: 10px;
}
.todo_info {
  text-align: left;
}
.checked {
  text-decoration: line-through;
}
</style>
