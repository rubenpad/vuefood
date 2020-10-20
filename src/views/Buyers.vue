<template>
  <v-card width="860px" max-width="100%" class="mx-auto">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Buyer ID
            </th>
            <th class="text-left">
              Buyer Name
            </th>
            <th class="text-left">
              Buyer Age
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="buyer"
            v-for="buyer in buyers"
            :key="buyer.id"
            @click="goToBuyer(buyer.id)"
          >
            <td>{{ buyer.id }}</td>
            <td>{{ buyer.name }}</td>
            <td>{{ buyer.age }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      buyers: []
    };
  },
  methods: {
    goToBuyer(buyerId) {
      this.$router.push({ name: "History", params: { buyerId } });
    },
    async getBuyers() {
      const response = await api.getBuyers();
      this.buyers = response.data.buyers;
    }
  },
  created() {
    this.getBuyers();
  }
};
</script>

<style>
.buyer {
  cursor: pointer;
}
</style>
