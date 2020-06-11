<template>
  <div class="total">
    <i id="gamepad" class="fas fa-gamepad"></i>
    <h2>Juegos Disponibles</h2>
    <ul>
      <li v-for="(producto, index) in enStock" :key="index" :style="{ background: producto.color }">
        <label>
          {{ producto.code }} | {{ producto.name }} | {{ producto.stock }} |
          {{ producto.price }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Total",
  data() {
    return {};
  },
  methods: {
    ...mapState(["products"])
  },
  computed: {
    ...mapGetters(["enStock", "juegosDisp", "sumaTotal"])
  }
};
</script>

<style scoped>
.total {
  background-color: #fff7d0;
}
#gamepad {
  color: #011724;
  font-size: 40px;
  padding: 30px 5px 0 5px;
}
h2 {
  color: #011724;
  font-weight: bold;
  padding: 5px 0 5px 0;
}

ul {
  margin: 10px 30px 30px 30px;
  padding: 0;
}
label {
  color: #d4d2d2;
  font-weight: bold;
  padding: 5px 0;
  margin: 0;
}
i {
  font-size: 40px;
  padding: 10px 5px;
}
li {
  list-style: none;
}
</style>
