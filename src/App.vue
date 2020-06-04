<template>
  <div id="app">
    <img class="logo" src="../src/assets/32bits.png" alt="logo" />
    <nav>
      <router-link class="menu" to="/"> INICIO</router-link> |
      <router-link class="menu" to="/buscar">BUSCAR JUEGO</router-link> |
      <router-link class="menu" to="/ventas">VENTAS</router-link> |
      <router-link class="menu" to="/total">TOTAL</router-link>
    </nav>
    <router-view></router-view>

    <footer>
      <div>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <p class="copyright">Copyright © 32bits - 2020</p>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff7d0;
  color: #2c3e50;
}
.logo {
  width: 300px;
  padding: 50px 0 0 0;
}
nav {
  padding-top: 30px;
}
.menu {
  font-size: 15px;
  font-weight: 300;
  padding: 10px;
  color: #1d1c1b;
  text-decoration: none;
  letter-spacing: 1px;
}
.menu:hover {
  color: #e55101;
  text-decoration: none;
}

@media screen and (max-width: 450px) {
  nav {
    padding: 50px 30px 0 30px;
  }
}
/* .container {
  background-color: #011724;
  max-width: 100%;
}

/* .fade-enter,
.fade-leave-to {
  opacity: 1;
}
.fade-enter-to,
.fade-leave {
  opacity: 0;
} */

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  transition-timing-function: ease;
}

/* @media screen and (max-width: 550px) {
  .navbar__logo {
    width: 40%;
  }
}  */

footer {
  background-color: #011724;
  /*   position: fixed;
 */
  bottom: 0;
  width: 100%;
}
.fab {
  font-size: 30px;
  padding: 20px 5px 5px 5px;
  color: white;
}
.copyright {
  margin: 0;
  color: white;
  padding: 7px 0 35px 0;
}
</style>
