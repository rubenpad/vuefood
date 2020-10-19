<template>
  <v-card color="#f3f8fb">
    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
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
