<template>
  <div class="container">
    <form class="search-input">
      <div class="scmp d-flex">
        <input
          class="form-control"
          type="search"
          placeholder="Search SCMP"
          aria-label="Search"
          v-model="searchInput"
        />
        <button class="btn" type="submit" @click.prevent="filterSearch">
          <font-awesome-icon :icon="['fas', 'search']" class="icon" />
        </button>
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
      <div class="result">
        <p class="mt-2">Search Results</p>
        <p class="mt-2 text-end">Topics: China, Business</p>
        <div class="border-bottom"></div>
        <div class="row">
          <div class="col-sm-10">
            <div class="topics-title d-flex">
              <h5 class="topics mt-4">
                Tech |
              </h5>
              <h5 class="title mt-4">
                China-Russia military drill makes room for combined force
                against US
              </h5>
            </div>

            <div class="date mt-3">
              <p>13 AUG 2021 - 9:30AM</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="image mt-4">
              <img
                src="https://cdn.i-scmp.com/sites/default/files/styles/118x118/public/d8/images/methode/2021/08/13/1daa40a6-fc26-11eb-aa37-9736ba6f9b4b_image_hires_215324.jpg?itok=XgmWUjMm&v=1628862815"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
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
  width: 700px;
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

@media (max-width: 425px) {
  .form-control,
  .btn {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .icon[data-v-7cb41050] {
    font-size: 20px;
  }
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
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  box-sizing: border-box;
}
.topics {
  color: #666666;
  width: 15%;
}
img {
  width: 100%;
  height: 100%;
}
.date {
  color: #999999;
  font-size: 13px;
}

@media (max-width: 576px) {
  .topics-title h5 {
    font-size: 15px;
  }
  .topics {
    width: 35%;
  }
  .col-sm-2 {
    display: inline-block;
    width: 25%;
    height: 30%;
  }
  .col-sm-10 {
    display: inline-block;
    width: 75%;
    height: 70%;
  }
}
</style>
