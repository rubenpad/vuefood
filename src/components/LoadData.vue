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
            <v-date-picker v-model="date" scrollable>
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
            Load
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-card>
      </v-sheet>
    </v-bottom-sheet>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import api from "@/api";
import { format } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";

export default {
  name: "LoadDataSheet",
  data() {
    return {
      loading: false,
      sheet: false,
      menu: false,
      message: "",
      snackbar: false,
      date: format(new Date(), "yyyy-MM-dd")
    };
  },
  methods: {
    async loadData(date) {
      this.loading = true;
      const now = format(new Date(), "yyyy-MM-dd");
      if (date > now) {
        this.loading = false;
        this.message = `Please select a date lower or equal to ${now}`;
        this.snackbar = true;
        return;
      }

      const unixTimestamp = getUnixTime(new Date(date + "GMT-5"));
      const response = await api.loadData(unixTimestamp);

      this.loading = false;
      this.message = response.message;
      this.snackbar = true;
    }
  }
};
</script>
