<template>
  <div class="buscar">
    <div class="form" @submit.prevent="buscarId">
      <input v-model="id" type="text" placeholder="Buscar juego por ID" />
      <button
        type="submit"
        @click="buscarId = !buscarId"
        :class="{ active: !mostrar }"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>

    <!-- <div v-for="(producto, index) in buscarImagen" :key="index">-->
    <div class="desplegar">
      <!--  <img :src="`/` + buscarImagen" alt="juego" />-->
    </div>
    <p class="juego_buscado" v-if="!mostrar">{{ buscarId.name }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Buscar",
  data() {
    return {
      id: "",
      mostrar: false,
    };
  },
  computed: {
    ...mapGetters(["byId"]),
    buscarId() {
      let result = this.byId(this.id);
      return result ? result : { name: "No se ha buscado ningún juego." };
    },
  },
  methods: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.buscar {
  background-color: #fff7d0;
}
.form {
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
.juego_buscado {
  font-size: 40px;
  color: #e73c09;
  padding-bottom: 30px;
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
