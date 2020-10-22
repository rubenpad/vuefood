<template>
  <div>
    <v-card class="mx-auto my-12" max-width="480">
      <v-img
        lazy-src="../assets/goodfood.jpg"
        src="../assets/goodfood.jpg"
        height="250"
      ></v-img>
      <h1 class="text-center mt-4">
        Welcome to
        <span class="font-weight-light text-uppercase">good</span>
        <span class="text-uppercase">food</span>
      </h1>
    </v-card>

    <LoadDataSheet />
  </div>
</template>

<script>
import LoadDataSheet from "@/components/LoadData.vue";
import { format } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";
import api from "@/api";

export default {
  name: "Home",
  components: { LoadDataSheet },
  data() {
    return {
      date: format(new Date(), "yyyy-MM-dd")
    };
  },
  mounted() {
    this.loadData(this.date);
  },
  methods: {
    async loadData(date) {
      const unixTimestamp = getUnixTime(new Date(date + "GMT-5"));
      await api.loadData(unixTimestamp);
    }
  }
};
</script>
