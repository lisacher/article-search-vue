<template>
  <div class="navbar">
    <a href="/search" class="nav-brand">
      <div class="logo d-flex">
        <div class="logo-left"></div>
        <div class="logo-right"></div>
      </div>

      South China Morning Post</a
    >
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/poll" class="nav-link activity"
            >Poll Listing</router-link
          >
        </li>
      </ul>
    </nav>
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span class="hamburger"></span>
    </label>
  </div>
</template>

<style scoped>
.navbar {
  border-bottom: 3px solid rgba(204, 204, 204, 0.18);
  position: fixed;
  top: 0;
  left: 12px;
  width: 98%;
  z-index: 100;
  height: 60px;
  background-color: #fff;
}

@media (max-width: 425px) {
  .navbar {
    width: 95%;
  }
}

.nav {
  position: absolute;
  top: 100%;
  width: 100%;
  background: #fff;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.2s ease-out;
}
.logo {
  margin-right: 10px;
  margin-left: 10px;
  align-items: center;
}

.logo-left {
  background-color: #ffca05;
  width: 12px;
  height: 19px;
  margin-right: 3px;
}
.logo-right {
  background-color: #001246;
  width: 12px;
  height: 19px;
}

.navbar-toggle {
  visibility: hidden;
  position: absolute;
}

.navbar-toggle:checked ~ .nav {
  transform: scale(1, 1);
}

.navbar-toggle:checked ~ .nav .nav-item {
  opacity: 1;
  transition: opacity 0.2s ease-out 0.1s;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  font-family: "Abril Fatface", cursive;
  font-weight: 200;
  color: #000000;
  font-size: 18px;
  line-height: 40px;
}

.nav-item {
  margin: 1.4rem 0;
  opacity: 0;
}

.nav-link {
  font-weight: bold;
}

.navbar-toggle-label {
  position: absolute;
  right: 2%;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.hamburger {
  width: 18px;
  height: 2px;
  background: #000000;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: "";
  width: 18px;
  height: 2px;
  background: #000000;
  left: 0;
  position: absolute;
}

.hamburger::before {
  bottom: 6px;
}

.hamburger::after {
  top: 6px;
}
</style>
