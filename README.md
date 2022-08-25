# vue-brazil-money
Esta biblioteca foi feita para facilitar o uso de valores monetários em reais brasileiros (R$) em Vue 3, exibindo o valor formatado e armazenando com duas
casas decimais em string para uso do desenvolvedor.

## Modo de uso
```html
<template>
  <div id="app">
    <p>{{ test }}</p>
    <money v-model="test" id="input" />
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
```

## Attrs
```
Você pode passar atributos ao componente normalmente, da mesma forma que um input, como por exemplo disabled.
```
```html
<money v-model="test" disabled />
```

## Referências para publicação no NPM
"Como criar e publicar uma biblioteca (em Vue) no npm?" -> https://medium.com/tableless/como-criar-e-publicar-uma-biblioteca-em-vue-no-npm-2dff8271ca7d