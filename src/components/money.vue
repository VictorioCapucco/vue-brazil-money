<template>
  <input
    v-model="money"
    v-bind="$attrs"
    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
    @input="formatMoney($event.target.value)"
  />
</template>
<script>
export default {
  name: "vue-brazil-money",
  data() {
    return {
      money: "",
    };
  },
  props: {
    modelValue: [Number, String],
    decimal: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    updateInput(maskedValue, floatValue) {
      this.$emit("update:modelValue", floatValue);
      this.money = maskedValue;
    },
    fillWithZeros(strValue) {
      let filledStr = strValue.split("").reverse().join("");
      while (filledStr.length < this.decimal + 1) {
        filledStr += "0";
      }
      return filledStr.split("").reverse().join("");
    },
    formatMoney(value) {
      let strValue = String(value).replace(/[^0-9]/g, "");

      if (strValue.length < this.decimal + 1) {
        strValue = this.fillWithZeros(strValue);
      } else if (strValue.length >= this.decimal + 2) {
        if (strValue.substring(0, 1) === "0") strValue = strValue.substring(1);
      }

      let afterDecimalPoint = strValue
        .split("")
        .reverse()
        .join("")
        .substring(0, this.decimal)
        .split("")
        .reverse()
        .join("");
      let beforeDecimalPoint = String(
        Number(strValue.substring(0, strValue.length - this.decimal))
      );

      let beforeDecimalPointWithDot = "";
      let beforeDecimalPointArray = beforeDecimalPoint.split("").reverse();

      for (
        let i = 0;
        beforeDecimalPointArray.length > 0 &&
        i < beforeDecimalPointArray.length;
        i++
      ) {
        beforeDecimalPointWithDot += beforeDecimalPointArray[i];
        if ((i + 1) % 3 === 0 && beforeDecimalPointArray.length - i > 1) {
          beforeDecimalPointWithDot += ".";
        }
      }
      beforeDecimalPointWithDot = beforeDecimalPointWithDot
        .split("")
        .reverse("")
        .join("");
      beforeDecimalPointWithDot =
        beforeDecimalPointWithDot === "" ||
        Number(beforeDecimalPointWithDot.replace(".", "")) === 0
          ? "0"
          : beforeDecimalPointWithDot;

      this.updateInput(
        "R$ " + (beforeDecimalPointWithDot + "," + afterDecimalPoint),
        beforeDecimalPointWithDot.replaceAll(".", "") + "." + afterDecimalPoint
      );
    },
  },
};
</script>
