<template>
  <input type="date" v-model="value" />
</template>

<script>
export default {
  name: "DateInput",
  props: {
    value: String,
  },
};
</script>

<style scoped>
input {
  width: 180px;
  height: 35px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  color: #505050;
}
</style>
