<template>
  <div>
    <ul>
      <li v-for="report in history" :key="report.date">
        <h2>{{ report.date }}</h2>
        <ul>
          <li v-for="transaction in report.transactions" :key="transaction.id">
            <p>{{ transaction.id }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import jsondata from "../../data.json";

export default {
  props: ["buyer"],
  data() {
    return {
      history: jsondata.data.history
    };
  }
};
</script>
