<template>
  <div>
    <p>Returned value {{ test }}</p>
    Formatted value:
    <money v-model="test" :decimalPlaces="5" class="text-red" />
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
<style>
.text-red {
  color: red;
}
</style>
