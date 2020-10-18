<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="font-weight-bold text-uppercase">
        <span class="secondary--text">good</span>
        <span class="success--text">food</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          min-
          v-for="link in links"
          :key="link.text"
          :to="link.route"
          text
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
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
