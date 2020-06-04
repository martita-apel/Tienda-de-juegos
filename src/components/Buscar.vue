<template>
  <div class="buscar">
    <form @submit.prevent="buscarId">
      <input v-model="id" type="text" placeholder="Buscar juego por ID" />
      <button @click="buscarId" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <!--     <div v-for="(producto, index) in buscarImagen" :key="index">
 -->
    <div class="desplegar">
      <img :src="`/` + buscarImagen" alt="juego" />
    </div>
    <p>{{ buscarId.name }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Buscar",
  data() {
    return {
      id: "",
    };
  },
  methods: {
    ...mapState(["products"]),
  },
  computed: {
    ...mapGetters(["byId", "juegosDisp", "sumaTotal", "buscarImagen"]),
    buscarId() {
      let result = this.byId(this.id);
      return result ? result : { name: "" };
    },
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
</style>
