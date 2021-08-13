<template>
  <div class="search">
    <Navbar />
    <Search />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";

export default {
  components: { Navbar, Search },
  name: "SearchPage",
};
</script>

<style scoped>
.search {
  padding: 0px 12px 0px 12px;
}
</style>
