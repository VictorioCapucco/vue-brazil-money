<template>
  <div>
    <p>Returned value {{ test }}</p>
    <p>
      Formatted value:
      <money
        v-model="test"
        :decimalPlaces="decimalPlace"
        id="input"
        class="text-red"
      />
    </p>
    <p>
      Decimal places
      <select v-model="decimalPlace" id="selectDecimalPlaces">
        <option v-for="i in 11" :value="i - 1" :key="i">{{ i - 1 }}</option>
      </select>
    </p>
  </div>
</template>

<script>
import money from "./components/money.vue";
export default {
  name: "App",
  data() {
    return {
      test: "",
      decimalPlace: 0,
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
