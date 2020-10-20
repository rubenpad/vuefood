<template>
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
</template>

<script>
export default {
  props: ["buyer"],
  data() {
    return {};
  }
};
</script>
