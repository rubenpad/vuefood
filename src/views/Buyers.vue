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
export default {
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
  },
  methods: {
    goToBuyer(buyerId) {
      this.$router.push({ name: "History", params: { buyerId } });
    }
  }
};
</script>

<style>
.buyer {
  cursor: pointer;
}
</style>
