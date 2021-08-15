<template>
  <div class="container">
    <form class="search-input" @click="getResult">
      <div class="scmp d-flex">
        <input
          class="form-control"
          type="search"
          name="q"
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
          name="t"
          placeholder="Topics"
          aria-label="Search"
          v-model="topicsInput"
        />
      </div>
      <template v-if="keyword.trim()">
        <div class="result">
          <p class="mt-2">Search Results</p>
          <div class="topic-item d-flex justify-content-end align-items-center">
            <p class="m-1" style="font-weight:600">Topics:</p>
            <span
              class="text-end m-1"
              style="font-weight:600; color:#4169e1"
              v-for="list in filteredTopics"
              :key="list.id"
            >
              <span>{{ list }},</span>
            </span>
          </div>
        </div>
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
import searchAPI from "./../apis/search";
import { Toast } from "./../utils/helpers";
import { exactDateFilter } from "../utils/mixins";

export default {
  name: "search",
  mixins: [exactDateFilter],
  data() {
    return {
      keyword: "",
      textInput: "",
      topicsInput: "",
      topics: [],
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
    this.fetchTopics();
  },
  methods: {
    async fetchSearchResult({ q, t }) {
      try {
        const response = await searchAPI.getSearch({
          q,
          t,
        });
        this.text = response.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchTopics() {
      try {
        const { data } = await searchAPI.getTopics();
        this.topics = data;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得Topics，請稍後再試",
        });
      }
    },
    getResult() {
      this.keyword = this.textInput;
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
