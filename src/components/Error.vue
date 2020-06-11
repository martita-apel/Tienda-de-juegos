<template>
  <div class="error">
    <h1>La página que buscas no existe</h1>
    <router-link class="enlace" to="/">Volver al Inicio</router-link>
  </div>
</template>

<script></script>

<style scoped>
.error {
  background-color: #fff7d0;
}
h1 {
  color: gray;
  font-size: 100px;
  margin: 30px 20px 60px 20px;
}
.enlace {
  background-color: tomato;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 100px;
  position: relative;
  top: -50px;
}
</style>
