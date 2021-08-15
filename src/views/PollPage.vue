<template>
  <div class="container">
    <Navbar />
    <div class="title border-bottom mobile-none">
      <h1>{{ singlePoll.title }}</h1>
    </div>
    <div class="publish mobile-none text-end">
      <p>PUBLISHED: {{ singlePoll.publishedDate | publishDate }}</p>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="mobile-show">
          <h1>{{ singlePoll.title }}</h1>
        </div>
        <div class="answer ms-5">
          <button
            class="btn yes"
            @click.stop.prevent="updateYes"
            :disabled="isVoted"
          >
            YES
          </button>
          <br />
          <button
            class="btn no"
            @click.stop.prevent="updateNo"
            :disabled="isVoted"
          >
            NO
          </button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="chart-result">
          <!-- chartJs -->
          <div class="chart-list">
            <div class="Chart">
              <LineChart
                id="myChart"
                :customChartData="customChartData"
              ></LineChart>
              <p id="legend"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="total-vote">
        <p>Total number of votes recorded: {{ singlePoll.totalVotes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { publishDateFilter } from "../utils/mixins";
import LineChart from "../components/LineChart.vue";

const dummyPolls = {
  polls: [
    {
      id: 1,
      title: "Is bitcoin worth the time and money that mining requires?",
      publishedDate: 1516605447,
      totalVotes: 182,
      answer: {
        type: "Single",
        options: [
          {
            id: 1,
            label: "Yes",
          },
          {
            id: 2,
            label: "No",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Should chatbots replace humans in customer service jobs?",
      publishedDate: 1516000647,
      totalVotes: 182,
      answer: {
        type: "Single",
        options: [
          {
            id: 3,
            label: "Yes",
          },
          {
            id: 4,
            label: "No",
          },
        ],
      },
    },
    {
      id: 3,
      title: "How are we feeling about 2018?",
      publishedDate: 1515568647,
      totalVotes: 182,
      answer: {
        type: "Single",
        options: [
          {
            id: 5,
            label: "Hopeful",
          },
          {
            id: 6,
            label: "Doubtful",
          },
        ],
      },
    },
    {
      id: 4,
      title:
        "Which country/region have you ever visited? (Select all that applies)",
      publishedDate: 1515482247,
      totalVotes: 182,
      answer: {
        type: "Multi",
        options: [
          {
            id: 7,
            label: "Hong Kong",
          },
          {
            id: 8,
            label: "China",
          },
          {
            id: 9,
            label: "Australia",
          },
          {
            id: 10,
            label: "Thailand",
          },
          {
            id: 11,
            label: "Korea",
          },
          {
            id: 12,
            label: "Japan",
          },
        ],
      },
    },
    {
      id: 5,
      title: "Will new benefits encourage you to study or work in mainland?",
      publishedDate: 1515309447,
      totalVotes: 182,
      answer: {
        type: "Single",
        options: [
          {
            id: 13,
            label: "Yes",
          },
          {
            id: 14,
            label: "No",
          },
        ],
      },
    },
  ],
};
export default {
  components: { Navbar, LineChart },
  mixins: [publishDateFilter],
  name: "PollListing",
  data() {
    return {
      singlePoll: {
        id: -1,
        publishedDate: "",
        title: "",
        totalVotes: "",
      },
      isVoted: false,
      customChartData: {
        labels: ["yes", "no"],
        datasets: [
          {
            data: [13, 87],
            borderWidth: 0,
            backgroundColor: ["#e46c2c", "rgb(19, 43, 89)"],
          },
        ],
      },
    };
  },
  created() {
    const { id: pollId } = this.$route.params;
    this.fetchPolls(pollId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: pollId } = to.params;
    this.fetchPolls(pollId);
    next();
  },
  methods: {
    fetchPolls(pollId) {
      pollId = Number(pollId);
      const res = dummyPolls.polls.find((poll) => poll.id === pollId);
      this.singlePoll = {
        ...this.singlePoll,
        ...res,
      };
      console.log(res);
      console.log(pollId);
    },
    updateNo() {
      setTimeout(() => {
        this.singlePoll.totalVotes += 1;
        this.isVoted = true;
        this.customChartData.datasets[0] = {
          data: [13, 88],
          borderWidth: 0,
          backgroundColor: ["#e46c2c", "rgb(19, 43, 89)"],
        };
        this.customChartData = {
          ...this.customChartData,
        };
      }, 500);
    },
    updateYes() {
      setTimeout(() => {
        this.singlePoll.totalVotes += 1;
        this.isVoted = true;
        this.customChartData.datasets[0] = {
          data: [14, 87],
          borderWidth: 0,
          backgroundColor: ["#e46c2c", "rgb(19, 43, 89)"],
        };
        this.customChartData = {
          ...this.customChartData,
        };
      }, 500);
    },
  },
};
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
.row {
  display: flex;
  background-color: #b3cfe4;
  width: 80%;
  height: 100%;
  margin-left: 10%;
}
.title {
  width: 80%;
  margin-bottom: 20px;
  margin-left: 10%;
}
.publish {
  width: 80%;
  margin-left: 10%;
}
.publish p {
  font-size: 13px;
  font-weight: 400;
  color: #666;
}
.chart-result {
  background-color: #b3cfe4;
}
.total-vote {
  margin-left: 20px;
  font-weight: bold;
}
@media (max-width: 570px) {
  .row {
    width: 90%;
    margin-left: 5%;
  }
  .total-vote p {
    font-size: 13px;
    text-align: center;
  }
  .total-vote {
    margin-left: 0px;
  }
  .yes[data-v-18783bb0] {
    margin-top: 10px;
    width: 20%;
    font-size: 14px;
  }
  .no[data-v-18783bb0] {
    margin-bottom: 20px;
    width: 20%;
    font-size: 14px;
  }
  .total-vote p {
    font-size: 15px;
  }
}
.yes {
  background-color: #e46c2c;
  color: #fff;
  border-radius: 0;
  margin-bottom: 10px;
  width: 60px;
  font-weight: bold;
  margin-top: 70px;
}
.no {
  background-color: rgb(19, 43, 89);
  color: #fff;
  border-radius: 0;
  width: 60px;
  font-weight: bold;
}
h1 {
  font-family: "Merriweather", serif;
  font-weight: 600;
}
.chart-list {
  max-width: 250px;
  margin: 10px auto;
}
</style>
