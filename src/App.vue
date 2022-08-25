<template>
  <div id="app">
    <p>{{ test }}</p>
    <money v-model="test" />
  </div>
</template>

<script>
import money from "./components/money.vue";
export default {
  name: "App",
  data() {
    return {
      test: "",
    };
  },
  components: {
    money,
  },
};
</script>