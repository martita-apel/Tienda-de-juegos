<template>
  <div class="inicio">
    <img
      class="col-12 col-lg-8"
      src="https://cdn.dribbble.com/users/1159713/screenshots/3397424/game-box-gif.gif"
      alt="Videogame"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Inicio",
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
  },
};
</script>

<style scoped>
.inicio {
  background-color: #fff7d0;
}
img {
  max-width: 50%;
  display: flex;
  margin: auto;
}

@media screen and (max-width: 1200px) {
  img {
    max-width: 60%;
  }
}

@media screen and (max-width: 992px) {
  img {
    width: 75%;
  }
}

@media screen and (max-width: 600px) {
  img {
    width: 200%;
    padding: 0;
  }
}

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
