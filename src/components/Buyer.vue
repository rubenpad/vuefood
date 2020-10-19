<template>
  <router-link :to="{ name: 'History', params: { buyerId: buyer.id } }">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        color="#f3f8fb"
      >
        <v-card-title>
          {{ buyer.name }}
        </v-card-title>

        <v-card-subtitle>{{ buyer.age }}</v-card-subtitle>
      </v-card>
    </v-hover>
  </router-link>
</template>

<script>
export default {
  props: ["buyer"],
  data() {
    return {};
  }
};
</script>
