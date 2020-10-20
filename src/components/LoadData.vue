<template>
  <div class="text-center">
    <v-btn color="blue" dark @click="sheet = !sheet">
      Load Data
    </v-btn>
    <v-bottom-sheet v-model="sheet" class="d-flex justify-center">
      <v-sheet class="text-center" height="300px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <v-card
          class="d-flex justify-center align-center mx-auto mt-12 pa-4"
          max-width="480px"
        >
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
            :loading="loading"
            :disabled="loading"
            color="blue-grey"
            class="ma-2 white--text"
            @click="loadData(date)"
          >
            Upload
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-card>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "LoadDataSheet",
  components: {},
  data() {
    return {
      loading: false,
      sheet: false,
      menu: false,
      date: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    async loadData(date) {
      const d = new Date(date);
      const unixTimestamp = Math.floor(d.getTime() / 1000);

      this.loading = true;
      const response = await api.loadData(unixTimestamp);

      this.loading = false;
      console.log(response.message);
    }
  }
};
</script>
