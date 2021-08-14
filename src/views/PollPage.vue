<template>
  <div class="container">
    <Navbar />
    <div class="title border-bottom mobile-none">
      <h1>Is bitcoin worth the time and money that mining requires?</h1>
    </div>
    <div class="publish mobile-none text-end">
      <p>PUBLISHED: Wednesday, 17 January, 2018, 1:08PM</p>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="mobile-show">
          <h1>Is bitcoin worth the time and money that mining requires?</h1>
        </div>
        <div class="answer ms-5">
          <button class="btn yes">YES</button>
          <br />
          <button class="btn no">NO</button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="chart-result">
          <Chart />
        </div>
      </div>
      <div class="total-vote">
        <p>Total number of votes recorded: 182</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Chart from "../components/Chart.vue";
export default {
  components: { Navbar, Chart },
  name: "PollListing",
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
</style>
