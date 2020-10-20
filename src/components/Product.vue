<template>
  <v-card>
    <v-card-text> {{ product.name }} </v-card-text>
    <v-card-text>{{ product.price }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  }
};
</script>
