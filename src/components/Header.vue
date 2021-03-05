<template>
  <div class="form">
    <Input :value="title" v-model="title" />
    <DateInput :value="date" v-model="date" />
    <Button text="Добавить" v-on:click="setTodo" />
  </div>
</template>

<script>
import Input from "./Input";
import DateInput from "./DateInput";
import Button from "./Button";

export default {
  name: "Header",
  components: {
    Input,
    DateInput,
    Button,
  },
  data: () => ({
    date: "",
    title: "",
  }),
  methods: {
    setTodo(e) {
      e.preventDefault();
      if (this.date && this.title) {
        this.$store.dispatch("setTodo", [this.date, this.title]);
        this.date = "";
        this.title = "";
        let content = document.querySelector(".todoList");
        if(content) {
          content.scrollLeft += 1000
        }
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto 60px;
}
</style>
