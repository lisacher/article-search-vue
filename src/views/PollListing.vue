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
              Is bitcoin worth the time and money that mining requires?
              <span class="date">17 JAN 2016</span>
            </p>
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
    <div class="con">
      <div class="poll-list">
        <div class="col-sm-6 border-end">
          <div class="list">
            <img src="../assets/percent.png" alt="" />
            <div class="description">
              <span class="date">9 JAN 2019</span>
              <router-link to="/poll-page">
                <div class="title mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum voluptatum sequi natus officiis unde.
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="list">
            <img src="../assets/percent.png" alt="" />
            <div class="description">
              <span class="date">9 JAN 2019</span>
              <div class="title mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                voluptatum sequi natus officiis unde.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="poll-list">
        <div class="col-sm-6 border-end">
          <div class="list">
            <img src="../assets/percent.png" alt="" />
            <div class="description">
              <span class="date">9 JAN 2019</span>
              <div class="title mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing eli.
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="list">
            <img src="../assets/percent.png" alt="" />
            <div class="description">
              <span class="date">9 JAN 2019</span>
              <div class="title mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing eli.
              </div>
            </div>
          </div>
        </div>
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
  justify-content: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.list {
  display: flex;
  padding-top: 20px;
}
.total-vote {
  margin-left: 20px;
  font-weight: bold;
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
    margin-left: 20px;
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
  }
  .con {
    width: 100%;
    margin-left: 0%;
  }
}
</style>
