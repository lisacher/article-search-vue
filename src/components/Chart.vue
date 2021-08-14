<template>
  <div class="chart-list">
    <div class="Chart">
      <LineChart></LineChart>
    </div>
  </div>
</template>
<script>
import LineChart from "../components/LineChart";
export default {
  name: "Chart",
  components: {
    LineChart,
  },
};
</script>
<style>
.chart-list {
  max-width: 250px;
  margin: 10px auto;
}
</style>
