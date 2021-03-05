<template>
  <div id="app">
    <Header />
    <TodoList />
  </div>
</template>

<script>
// <script lang="ts">
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    Header,
    TodoList
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  color: #505050;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px auto;
  max-width: 1300px;
}
</style>
