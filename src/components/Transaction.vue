<template>
  <v-card color="#f3f8fb">
    <v-card-title>
      {{ transaction.id }}
    </v-card-title>

    <v-card-subtitle>{{ transaction.device }}</v-card-subtitle>
    <v-card-subtitle>{{ transaction.from.ip }}</v-card-subtitle>
    <Product
      v-for="product in transaction.products"
      :key="product.id"
      v-bind:product="product"
    />
  </v-card>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  components: { Product },
  props: ["transaction"],
  data() {
    return {};
  }
};
</script>
