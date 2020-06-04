<template>
  <div class="total">
    <i id="gamepad" class="fas fa-gamepad"></i>
    <h2>Venta de juegos</h2>
    <hr />
    <div>
      <img src="/sekiro.jpg" alt="juego" class="avatar" />
      <img src="/fifa21.jpg" alt="juego" class="avatar" />
      <img src="/gearsofwars.jpg" alt="juego" class="avatar" />
      <img src="/mario.jpeg" alt="juego" class="avatar" />
      <img src="/bloodborne.png" alt="juego" class="avatar" />
      <img src="/forza.jpg" alt="juego" class="avatar" />
    </div>

    <div class="bajada">
      <h4>
        Tenemos {{ juegosDisp }} tipos de juegos disponibles en nuestra Tienda
        Online.
      </h4>
      <h5>
        Entre estos {{ juegosDisp }} juegos, contamos con un stock de
        {{ sumaTotal }}.
      </h5>
    </div>
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
.bajada {
  padding: 10px 20px 50px 20px;
}
</style>
