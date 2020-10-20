<template>
  <v-dialog v-model="dialog" persistent max-width="580px" max-height="4000px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-content v-bind="attrs" v-on="on">
        <v-list-item-title v-text="transaction.id"></v-list-item-title>
      </v-list-item-content>
    </template>
    <v-card>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Transaction ID
              </th>
              <th class="text-left">
                Date
              </th>
              <th class="text-left">
                Device
              </th>
              <th class="text-left">
                IP
              </th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ transaction.id }}</td>
              <td>{{ formatDate(date) }}</td>
              <td>{{ transaction.device }}</td>
              <td>{{ transaction.from.ip }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Product Name
              </th>
              <th class="text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in transaction.products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ formatPrice(product.price) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error darken-1" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import formattersMixin from "@/mixins/formatters";

export default {
  mixins: [formattersMixin],
  props: ["transaction", "date"],
  data() {
    return { dialog: false };
  }
};
</script>
