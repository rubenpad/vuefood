<template>
  <div>
    <Spinner v-if="isLoading" />
    <div class="grid-products" v-if="!isLoading">
      <div class="grid-up">
        <v-card>
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
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ buyer.id }}</td>
                  <td>{{ buyer.name }}</td>
                  <td>{{ buyer.age }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>

      <v-card class="grid-down" tile>
        <v-list>
          <v-subheader class="text-subtitle-1"
            >Transactions by date:</v-subheader
          >
          <v-list-group v-for="report in history" :key="report.date">
            <template v-slot:activator>
              <v-icon class="mr-4" color="primary">mdi-calendar</v-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="formatDate(report.date)"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="transaction in report.transactions"
              :key="transaction.id"
              class="ml-6"
            >
              <v-icon class="mr-4" color="info">mdi-tag</v-icon>
              <Transaction
                v-bind:transaction="transaction"
                v-bind:date="report.date"
              />
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>

      <v-card class="grid-right" tile>
        <Suggestions v-bind:suggestions="suggestions" />
      </v-card>
    </div>
  </div>
</template>

<script>
import Transaction from "@/components/Transaction.vue";
import Suggestions from "@/components/Suggestions.vue";
import Spinner from "@/components/Spinner.vue";
import formattersMixin from "@/mixins/formatters";
import api from "@/api";

export default {
  mixins: [formattersMixin],
  components: { Transaction, Suggestions, Spinner },
  data() {
    return {
      dialog: false,
      isLoading: false,
      buyer: {},
      history: [],
      suggestions: []
    };
  },
  created() {
    this.getBuyerHistory();
  },
  methods: {
    async getBuyerHistory() {
      this.isLoading = true;
      const buyerId = this.$route.params.buyerId;
      const response = await api.getBuyerHistory(buyerId);
      this.buyer = response.data.buyer[0];
      this.history = response.data.history;
      this.suggestions = response.data.suggestions;
      this.isLoading = false;
    }
  }
};
</script>

<style>
.grid-products {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 60% 40%;
  grid-template-rows: 4% 96%;
}

.grid-up {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.grid-down {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.grid-right {
  grid-colum: 2 / 3;
  grid-row: 1 / 3;
}
</style>
