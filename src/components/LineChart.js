import { Doughnut } from "vue-chartjs";

export default {
  mixins: [Doughnut],
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["yes", "no"],
        datasets: [
          {
            data: [13, 87],
            backgroundColor: ["#e46c2c", "rgb(19, 43, 89)"],
          },
        ],
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        responsive: true,
        cutoutPercentage: 40,
      },
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  },
};
