<template>
  <v-list>
    <v-subheader class="text-subtitle-1">People using the same IP:</v-subheader>
    <v-list-group v-for="group in iplist" :key="group.uid">
      <template v-slot:activator>
        <v-icon class="mr-4" color="primary">mdi-map-marker</v-icon>
        <v-list-item-content>
          <v-list-item-title v-text="group.ip"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="item in group.buyers"
        :key="item.buyer.id"
        class="ml-6"
      >
        <v-icon class="mr-4">mdi-account</v-icon>
        <v-list-item-content class="pointer">
          <v-list-item-title
            class="pointer"
            v-text="item.buyer.name"
            v-on:click="$emit('buyer-id', item.buyer.id)"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: ["iplist"],
  data() {
    return {};
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
