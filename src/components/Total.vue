<template>
  <div class="total">
    <h2>Juegos Disponibles</h2>
    <ul>
      <li
        v-for="(producto, index) in enStock"
        :key="index"
        :style="{ background: producto.color }"
      >
        <label
          >{{ producto.code }} | {{ producto.name }} | {{ producto.stock }} |
          {{ producto.price }}</label
        >
        <!--  <button class="boton_stock" @click="agregarStock(producto)">+</button>
        <button class="boton_resta" @click="restarStock(producto)">-</button>
        <button class="boton_venta" @click="sell(producto)">Vender</button> -->
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
    ...mapState(["products"]),
  },
  computed: {
    ...mapGetters(["enStock", "juegosDisp", "sumaTotal"]),
  },
};
</script>

<style scoped>
.buscar {
  background-color: #fff7d0;
}
form {
  display: inline-flex;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
input {
  font-size: 30px;
  font-weight: lighter;
  padding: 15px 15px;
  border: 0;
  border-radius: 10px;
}

button {
  background-color: #e73c09;
  margin-left: 10px;
  padding: 5px 10px 5px 12px;
  color: white;
  border: 0;
  border-radius: 10px;
}

button:hover {
  color: gainsboro;
}
ul {
  margin: 20px;
  padding: 0;
}

i {
  font-size: 40px;
  padding: 10px 5px;
}
li {
  list-style: none;
}
</style>
