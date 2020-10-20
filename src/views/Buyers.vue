<template>
  <div>
    <Spinner v-if="isLoading" />
    <v-card v-if="!isLoading" width="860px" max-width="100%" class="mx-auto">
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
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import api from "@/api";

export default {
  components: { Spinner },
  data() {
    return {
      isLoading: false,
      buyers: []
    };
  },
  methods: {
    goToBuyer(buyerId) {
      this.$router.push({ name: "History", params: { buyerId } });
    },
    async getBuyers() {
      this.isLoading = true;
      const response = await api.getBuyers();
      this.buyers = response.data.buyers;
      this.isLoading = false;
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
