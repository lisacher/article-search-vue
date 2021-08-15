<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["customChartData"],
  data() {
    return {
      options: {
        responsive: true,
        cutoutPercentage: 40,
        elements: {
          center: {
            text: "%",
            color: "#FF6384", // Default is #000000
            fontStyle: "Arial", // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25, // Default is 25 (in px), used for when text wraps
          },
        },
      },
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.customChartData, this.options);
  },
  watch: {
    customChartData(value) {
      if (value) {
        this.$data._chart.update();
      }
    },
  },
};
</script>
