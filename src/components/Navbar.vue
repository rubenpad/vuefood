<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="grey lighten-4 text-uppercase" class="pa-4">
      <span class="font-weight-light">good</span>
      <span>food</span>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.icon"
        router
        :to="link.route"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-account-group", text: "Buyers", route: "/buyers" }
    ]
  })
};
</script>
