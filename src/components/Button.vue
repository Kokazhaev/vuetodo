<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style scoped>
button {
  height: 35px;
  border: 1px solid silver;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  color: #505050;
  cursor: pointer;
}

@media screen and (max-width: 725px) {
  button {
    width: 45%;
    margin: 0 auto 10px;
    padding: 0;
  }
}
</style>
