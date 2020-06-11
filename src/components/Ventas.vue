<template>
  <div class="total">
    <i id="gamepad" class="fas fa-gamepad"></i>
    <h2>Venta de juegos</h2>
    <hr />

    <div class="bajada">
      <h4>
        Tenemos {{ juegosDisp }} tipos de juegos disponibles en nuestra Tienda
        Online.
      </h4>
      <h5>
        Entre estos {{ juegosDisp }} juegos, contamos con un stock de
        {{ sumaTotal }}.
      </h5>

      <ul>
        <li v-for="(producto, index) in enStock" :key="index">
          <label>
            <b>{{ producto.name }}</b>
            | $ {{ producto.price }} |
            <i>stock:</i>
            {{ producto.stock }}
          </label>
          <button class="boton_venta" @click="sell(producto)">Vender</button>
        </li>
      </ul>

      <p class="total_venta">TOTAL VENTAS: {{ totalVentas }}</p>

      <div class="game">
        <p class="total_venta">JUEGOS VENDIDOS:</p>
        <label v-for="(producto, index) in juegosVendidos" :key="index">{{ producto.name }}/</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Total",
  data() {
    return {};
  },
  computed: {
    ...mapState(["products", "totalVentas"]),
    ...mapGetters(["juegosDisp", "sumaTotal", "enStock", "juegosVendidos"])
  },
  methods: {
    ...mapActions(["sellProduct"]),
    sell(producto) {
      this.sellProduct(producto);
    }
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
  padding: 5px 0 10px 0;
}
hr {
  width: 50%;
}

.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
}

h4,
h5 {
  color: #011724;
}

ul {
  margin: 10px 30px 30px 30px;
  padding: 0;
}

li {
  color: #011724;
  list-style: none;
}

button {
  width: 2%;
  margin: 10px 0 10px 10px;
  border-radius: 5px;
  border: 0;
  background-color: #e73c09;
  color: white;
}
button:hover {
  background-color: teal;
}
.boton_venta {
  width: 8%;
}
.total_venta {
  padding-bottom: 20px;
  letter-spacing: 2px;
  color: #011724;
  font-weight: bold;
}
.game {
  display: inline-flex;
  margin: auto;
}
</style>
