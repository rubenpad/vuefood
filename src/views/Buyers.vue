<template>
  <ul class="grid-content">
    <Buyer v-for="buyer in buyers" :key="buyer.id" v-bind:buyer="buyer" />
  </ul>
</template>

<script>
import Buyer from "@/components/Buyer.vue";

export default {
  components: { Buyer },
  data() {
    return {
      buyers: [
        {
          id: 1,
          name: "One",
          age: 23
        },
        {
          id: 2,
          name: "One",
          age: 23
        },
        {
          id: 3,
          name: "One",
          age: 23
        },
        {
          id: 4,
          name: "One",
          age: 23
        },
        {
          id: 5,
          name: "One",
          age: 23
        },
        {
          id: 6,
          name: "One",
          age: 23
        },
        {
          id: 7,
          name: "One",
          age: 23
        },
        {
          id: 8,
          name: "One",
          age: 23
        },
        {
          id: 9,
          name: "One",
          age: 23
        }
      ]
    };
  }
};
</script>

<style>
.grid-content {
  display: grid;
  grid-gap: 15px;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
</style>
