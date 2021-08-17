<template>
  <div class="poll">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="title m-3 d-flex">
            <div class="comment-icon"></div>
            <div class="title-poll">
              Today's Poll
            </div>
          </div>
          <div class="subtitle ms-4">
            <p>
              {{ polls[0].title }}
              <span class="date">{{ polls[0].publishedDate | date }}</span>
            </p>
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
          <p>Total number of votes recorded: {{ polls[0].totalVotes }}</p>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="poll-list">
        <div
          class="listing col-sm-6 border-bottom"
          v-for="poll in polls"
          :key="poll.id"
        >
          <div class="list">
            <img src="../assets/percent.png" alt="" />
            <div class="description">
              <span class="date">{{ poll.publishedDate | date }}</span>
              <router-link :to="{ name: 'poll-page', params: { id: poll.id } }">
                <div class="title mb-3">
                  {{ poll.title }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { dateFilter } from "../utils/mixins";
import LineChart from "../components/LineChart.vue";
import { v4 as uuidv4 } from "uuid";

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
  mixins: [dateFilter],
  components: { Navbar, LineChart },
  name: "PollListing",
  data() {
    return {
      polls: [],
      id: uuidv4(),
      isVoted: false,
      customChartData: {
        labels: ["yes", "no"],
        datasets: [
          {
            data: [39, 148],
            borderWidth: 0,
            backgroundColor: ["#e46c2c", "rgb(19, 43, 89)"],
          },
        ],
      },
    };
  },
  created() {
    this.fetchPolls();
    this.polls[0] =
      JSON.parse(localStorage.getItem(this.polls[0].id)) || this.polls[0];
    this.isVoted = JSON.parse(localStorage.getItem("isVoted")) || false;
    this.customChartData.datasets[0].data =
      JSON.parse(localStorage.getItem(this.id)) ||
      this.customChartData.datasets[0].data;
  },
  methods: {
    fetchPolls() {
      this.polls = dummyPolls.polls;
    },
    updateNo() {
      setTimeout(() => {
        this.isVoted = true;
        this.customChartData.datasets[0].data = [39, 149];
        localStorage.setItem("isVoted", JSON.stringify(this.isVoted));

        //set polls data in localStorage
        let data = {
          id: this.polls[0].id,
          totalVotes: (this.polls[0].totalVotes += 1),
          title: this.polls[0].title,
          publishedDate: this.polls[0].publishedDate,
        };
        localStorage.setItem(this.polls[0].id, JSON.stringify(data));

        //set chart data in localStorage
        localStorage.setItem(
          this.id,
          JSON.stringify(this.customChartData.datasets[0].data)
        );
      }, 500);
    },
    updateYes() {
      setTimeout(() => {
        this.isVoted = true;
        this.customChartData.datasets[0].data = [40, 148];
        localStorage.setItem("isVoted", JSON.stringify(this.isVoted));

        //set polls data in localStorage
        let data = {
          id: this.polls[0].id,
          totalVotes: (this.polls[0].totalVotes += 1),
          title: this.polls[0].title,
          publishedDate: this.polls[0].publishedDate,
        };
        localStorage.setItem(this.polls[0].id, JSON.stringify(data));

        //set chart data in localStorage
        localStorage.setItem(
          this.id,
          JSON.stringify(this.customChartData.datasets[0].data)
        );
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
.row {
  display: flex;
  background-color: #ccc;
  width: 60%;
  height: 300px;
  margin-bottom: 20px;
}
.con {
  width: 54%;
  margin-left: 23%;
}
.title {
  width: 90%;
}
.title-poll {
  width: 200px;
  margin-left: 10px;
  flex-wrap: nowrap;
  font-weight: 600;
  font-size: 20px;
  color: #26658f;
}
.subtitle p {
  font-family: "Merriweather", serif;
  font-weight: 600;
}
.date {
  color: #26658f;
  font-size: 14px;
  font-weight: bold;
}
.chart-result {
  background-color: #ccc;
}
.comment-icon {
  background-color: #26658f;
  width: 25px;
  height: 25px;
  border-radius: 20px 20px 20px 0px;
  margin: 0;
}
.total-vote {
  margin-top: 30px;
  margin-left: 20px;
  font-weight: bold;
}
.yes {
  background-color: #e46c2c;
  color: #fff;
  border-radius: 0;
  margin-bottom: 10px;
  width: 60px;
  font-weight: bold;
}
.no {
  background-color: rgb(19, 43, 89);
  color: #fff;
  border-radius: 0;
  width: 60px;
  font-weight: bold;
}
img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  margin-left: 10px;
}
.poll-list {
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
}
.list {
  display: flex;
  padding-top: 20px;
}

@media (max-width: 765px) {
  .row {
    width: 90%;
    height: 350px;
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
  .list {
    width: 100%;
    flex-direction: column;
    margin-right: 20px;
  }
  img {
    width: 100px;
    height: 100px;
    align-self: center;
  }
}
@media (max-width: 575px) {
  .row {
    height: 600px;
    margin-bottom: 80px;
  }
  .con {
    width: 100%;
    margin-left: 0%;
  }
  .poll-list {
    justify-content: center;
  }
  .description {
    align-self: center;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    width: 80%;
  }
}
</style>
