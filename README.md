# [![npm](https://img.shields.io/npm/dt/vue-brazil-money.svg)]() [![npm](https://img.shields.io/npm/v/vue-brazil-money-tag.svg)]() [![npm](https://img.shields.io/npm/l/vue-brazil-money-tag.svg)]()

# vue-brazil-money
If you just want a Vue 3 library to format brazillian money and don't want to configure anything, this library is perfect to you. 

```
npm install vue-brazil-money
```

## How to use
```html
<template>
    <money v-model="test" />
</template>

<script>
import money from "vue-brazil-money";
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
```

## Attrs
```
You can pass attributes to input, like disabled, class etc
```
```html
<template>
  <div>
    <p>Returned value {{ test }}</p>
    Formatted value:
    <money v-model="test" id="money-input" class="text-red" />
  </div>
</template>

<script>
import money from "vue-brazil-money";
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

```

## Props
```
You can inform the decimal places. The default value is 2
```
```html
<money v-model="test" :decimalPlaces="5" />
```

## Example
![Screenshot from 2022-12-21 21-46-58](https://user-images.githubusercontent.com/65973246/209030795-175134ef-a653-4f74-a5a3-6f332fa4519a.png)


## Authors
* Victorio Capucco
* Wellington Rosendo


## References
"Como criar e publicar uma biblioteca (em Vue) no npm?" -> https://medium.com/tableless/como-criar-e-publicar-uma-biblioteca-em-vue-no-npm-2dff8271ca7d
