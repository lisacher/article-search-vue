<template>
  <div class="container">
    <form class="search-input" @click.prevent="getResult">
      <div class="scmp d-flex">
        <input
          class="form-control"
          type="search"
          placeholder="Search SCMP"
          aria-label="Search"
          v-model="textInput"
          @keyup-enter.prevent="filteredResult"
        />
        <router-link
          :to="{ name: 'search-page', query: { q: textInput, t: topicsInput } }"
        >
          <button class="btn" type="submit">
            <font-awesome-icon :icon="['fas', 'search']" class="icon" />
          </button>
        </router-link>
      </div>
      <div class="topics-input">
        <input
          class="form-control"
          type="search"
          placeholder="Topics"
          aria-label="Search"
          v-model="topicsInput"
        />
      </div>
      <template v-if="keyword">
        <div class="result">
          <p class="mt-2">Search Results</p>
        </div>
      </template>
      <template v-if="topicsInput">
        <div class="topic-item d-flex justify-content-end align-items-center">
          <p class="m-1" style="font-weight:600">Topics:</p>
          <span
            class="text-end m-1"
            style="font-weight:600; color:#4169e1"
            v-for="(list, index) in filteredTopics"
            :key="list.id"
          >
            <span>{{
              (index == filteredTopics.length - 1 && list) || list + ","
            }}</span>
          </span>
        </div>
      </template>
      <template v-if="keyword">
        <div class="row" v-for="item in filteredResult" :key="item.id">
          <div class="col-sm-10">
            <div class="border-top"></div>
            <div class="topics-title">
              <h5 class="topics">{{ item.topics.toString() }} |</h5>
              <h5 class="title">{{ item.text }}</h5>
            </div>
            <div class="date mt-3">
              <p>{{ item.timeStamp | exactDate }}</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="border-top"></div>
            <div class="image">
              <img :src="item.image" alt="" />
            </div>
          </div>
        </div>
      </template>
    </form>
  </div>
</template>

<script>
// import searchAPI from "./../apis/search";
// import { Toast } from "./../utils/helpers";
import { exactDateFilter } from "../utils/mixins";

const dummyData = [
  {
    id: 1,
    text:
      "Hong Kong’s overtime work culture is a time bomb that may explode if left unchecked.",
    topics: ["Hong Kong"],
    timeStamp: "2019-09-15T00:00:00.000Z",
    image: require("../assets/0.jpg"),
  },
  {
    id: 2,
    text:
      "Magic, Cantopop, a French author, and the Hong Kong performer looking to recreate an age of innocence in her shows.",
    topics: ["Music"],
    timeStamp: "2019-09-13T00:00:00.000Z",
    image: require("../assets/1.jpg"),
  },
  {
    id: 3,
    text:
      "Hong Kong musician becomes the first Asian nominee for the distinguished UK classical music magazine Gramophone’s 2019 Orchestra of the Year Award.",
    topics: ["Music"],
    timeStamp: "2019-09-11T00:00:00.000Z",
    image: require("../assets/2.jpg"),
  },
  {
    id: 4,
    text:
      "The richest man calls for peace Hong Kong, adding his voice to the chorus of peace.",
    topics: ["Hong Kong"],
    timeStamp: "2019-09-10T00:00:00.000Z",
    image: require("../assets/3.jpg"),
  },
  {
    id: 5,
    text: "Shenzhen needs to attract overseas talent to come Greater Bay Area.",
    topics: ["China"],
    timeStamp: "2019-09-10T00:00:00.000Z",
    image: require("../assets/4.jpg"),
  },
  {
    id: 6,
    text: "Where a fun loving person eats in China",
    topics: ["China"],
    timeStamp: "2019-09-10T00:00:00.000Z",
    image: require("../assets/5.jpg"),
  },
  {
    id: 7,
    text:
      "Hong Kong property investors ignore Singapore in favour of cheaper options elsewhere",
    topics: ["Asia"],
    timeStamp: "2019-09-08T00:00:00.000Z",
    image: require("../assets/6.jpg"),
  },
  {
    id: 8,
    text:
      "Indonesia picks area on Borneo for new capital, with relocation estimated to cost US$33 billion",
    topics: ["Asia"],
    timeStamp: "2019-09-07T00:00:00.000Z",
    image: require("../assets/7.jpg"),
  },
  {
    id: 9,
    text:
      "US and China need to work together for the world to benefit from the digital era.",
    topics: ["China"],
    timeStamp: "2019-09-06T00:00:00.000Z",
    image: require("../assets/8.jpg"),
  },
  {
    id: 10,
    text: "North Korea launches fresh missiles into sea off Japan.",
    topics: ["Asia"],
    timeStamp: "2019-09-05T00:00:00.000Z",
    image: require("../assets/9.jpg"),
  },
  {
    id: 11,
    text:
      "Staffs in a Hong Kong airlines face unpaid leave or reduced working hours.",
    topics: ["Hong Kong"],
    timeStamp: "2019-09-05T00:00:00.000Z",
    image: require("../assets/10.jpg"),
  },
  {
    id: 12,
    text: "China again blocks US Navy port visit as Qingdao request is denied.",
    topics: ["Asia"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/11.jpg"),
  },
  {
    id: 13,
    text: "Journalists wear safety gear to Hong Kong police press conference.",
    topics: ["Hong Kong"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/12.jpg"),
  },
  {
    id: 14,
    text:
      "What is prorogation? A simple guide to what is happening in UK politics.",
    topics: ["Eurpoe"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/13.jpg"),
  },
  {
    id: 15,
    text: "Has UK Prime Minister Boris Johnson talked to the someone?",
    topics: ["Europe"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/1.jpg"),
  },
  {
    id: 16,
    text: "Northern Ireland court dismisses case against no-deal Brexit.",
    topics: ["Europe"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/2.jpg"),
  },
  {
    id: 17,
    text: "Scientists discover a big planet that’s potentially habitable.",
    topics: ["Europe"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/3.jpg"),
  },
  {
    id: 18,
    text:
      "Never lose your glasses again: why a Hong Kong filmmaker is bringing back the eyewear chain.",
    topics: ["Fashion"],
    timeStamp: "2019-09-04T00:00:00.000Z",
    image: require("../assets/4.jpg"),
  },
  {
    id: 19,
    text: "Crazy Rich Asian wedding planner on million dollar dresses.",
    topics: ["Asia"],
    timeStamp: "2019-09-03T00:00:00.000Z",
    image: require("../assets/5.jpg"),
  },
];

export default {
  name: "search",
  mixins: [exactDateFilter],
  data() {
    return {
      keyword: "",
      textInput: "",
      topicsInput: "",
      topics: ["Hong Kong", "Asia", "China", "Europe", "Fashion", "Music"],
      text: [],
      showSearchResult: false,
    };
  },
  computed: {
    filteredResult() {
      return this.text.filter((item) => {
        return item.text
          .trim()
          .toLowerCase()
          .includes(this.keyword.trim().toLowerCase());
      });
    },
    filteredTopics() {
      return this.topics.filter((topic) =>
        topic.toLowerCase().includes(this.topicsInput.toLowerCase())
      );
    },
  },
  created() {
    this.fetchSearchResult({ q: this.textInput, t: this.topicsInput });
    this.refreshPage();
  },
  methods: {
    fetchSearchResult() {
      this.text = dummyData;
    },
    fetchTopics() {
      this.topics;
    },
    //when use api
    // async fetchSearchResult({ q, t }) {
    //   try {
    //     const response = await searchAPI.getSearch({
    //       q,
    //       t,
    //     });
    //     this.text = response.data;
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // },
    // async fetchTopics() {
    //   try {
    //     const { data } = await searchAPI.getTopics();
    //     this.topics = data;
    //   } catch (error) {
    //     console.log(error);
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法取得Topics，請稍後再試",
    //     });
    //   }
    // },
    getTopicsComma() {
      // add comma
      var str = "";
      for (var i = 0; i < this.topics.length; i++) {
        str += this.topics[i] + ",";
      }
      //remove the last comma
      if (str.length > 0) {
        str = str.substr(0, str.length - 1);
      }
    },
    getResult() {
      this.keyword = this.textInput;
    },
    refreshPage() {
      if (this.$route.query.q !== "") {
        this.textInput = this.$route.query.q;
        this.keyword = this.textInput;
      }
      if (this.$route.query.t !== "") {
        this.topicsInput = this.$route.query.t;
      } else {
        this.textInput = "";
        this.topicsInput = "";
        this.keyword = "";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.search {
  padding: 0px 12px 0px 12px;
}
.search-input {
  width: 70%;
  height: 50px;
}
.form-control,
.btn {
  border-radius: 0;
  border: 0px;
  outline: none;
  font-size: 50px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}
.topics-title {
  display: flex;
}
.topic-item {
  width: 100%;
}
.topics-input {
  display: flex;
  flex-direction: column;
}
.icon {
  font-size: 40px;
  font-weight: 100;
  color: #4585ff;
  flex-direction: column;
}
.topics,
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  box-sizing: border-box;
  margin-top: 20px;
}
.topics {
  color: #666666;
  width: 15%;
  margin-top: 20px;
}
img {
  width: 100%;
  height: 100%;
}
.date {
  color: #999999;
  font-size: 13px;
}
.image {
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 425px) {
  .form-control,
  .btn {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .icon[data-v-7cb41050] {
    font-size: 20px;
  }
  .row {
    flex-wrap: nowrap;
  }
}

@media (max-width: 576px) {
  .topics-title {
    display: block;
  }
  .topics-title h5 {
    font-size: 15px;
  }
  .search-input {
    width: 100%;
    height: 50px;
  }
  .topic-item {
    width: 100%;
    flex-wrap: wrap;
  }
  .topics {
    display: block;
    width: 100%;
  }
  .title {
    width: 95%;
  }
  .col-sm-2 {
    display: inline-block;
    margin-right: 10px;
    width: 20%;
    height: 20%;
  }
  .col-sm-10 {
    display: inline-block;
    width: 70%;
    height: 70%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h5 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
}
</style>
