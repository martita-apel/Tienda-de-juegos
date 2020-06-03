<template>
  <div class="total">
    <h2>Venta de juegos</h2>
    <p>{{ juegosDisp }}</p>
    <p>{{ sumaTotal }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Total",
  data() {
    return {};
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["juegosDisp", "sumaTotal"]),
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

i {
  font-size: 40px;
  padding: 10px 5px;
}
li {
  list-style: none;
}
</style>
