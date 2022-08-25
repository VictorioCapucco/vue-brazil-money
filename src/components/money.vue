<template>
  <input
    v-model="money"
    v-bind="$attrs"
    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
    @input="formatMoney($event.target.value, $event.inputType)"
  />
</template>
<script>
export default {
  name: "vue-brazillian-money",
  data() {
    return {
      money: "",
    };
  },
  props: {
    modelValue: [Number],
  },
  mounted() {
    if (this.modelValue !== "" && this.modelValue !== 0) {
      this.formatMoney(this.modelValue, "initialValue");
    }
  },
  methods: {
    updateInput(maskedValue, floatValue) {
      this.$emit(
        "update:modelValue",
        Number(floatValue) !== 0 ? floatValue : 0
      );
      this.money = Number(floatValue) !== 0 ? `R$ ${maskedValue}` : "";
    },
    formatMoney(value, event) {
      let number = "";
      if (event === "insertFromPaste" || event === "initialValue") {
        if (!isNaN(value)) {
          if (String(value).includes(".")) {
            let splitValue = value.split(".");
            number = `${splitValue[0]}.${splitValue[1]}`;
            if (splitValue[1].length < 2) number += 0;
          } else {
            number = `${value}.00`;
          }
        }
      } else {
        number = value;
      }
      number = number.replace(/[^0-9]/g, "");
      if (number.length < 3) {
        number = number.split("").reverse().join("");
        while (number.length < 3) number += "0";
        number = number.split("").reverse().join("");
        this.updateInput(
          `${number[0]},${number[1]}${number[2]}`,
          `${number[0]}.${number[1]}${number[2]}`
        );
      } else if (number[0] === "0") {
        this.updateInput(
          `${number[1]},${number[2]}${number[3]}`,
          `${number[1]}.${number[2]}${number[3]}`
        );
      } else {
        let revert = number.split("").reverse().join("");
        let saida = `${revert[0]}${revert[1]},`;
        let contador = 0;
        for (let i = 2; i < revert.length; i++) {
          if (contador === 3) {
            saida += ".";
            contador = 0;
          }
          saida += revert[i];
          contador += 1;
        }
        this.updateInput(
          saida.split("").reverse().join(""),
          `${number.substring(0, number.length - 2)}.${number.substring(
            number.length - 2
          )}`
        );
      }
    },
  },
};
</script>