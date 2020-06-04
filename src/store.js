import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {
        code: "0001",
        name: "Sekiro",
        stock: 100,
        price: "30000",
        color: "red",
        featured: "true",
        img: "sekiro.jpg",
      },
      {
        code: "0002",
        name: "Fifa 21",
        stock: 100,
        price: "25000",
        color: "blue",
        featured: "false",
        img: "fifa21.jpg",
      },
      {
        code: "0003",
        name: "Gears of Wars 4",
        stock: 100,
        price: "15000",
        color: "green",
        featured: "true",
        img: "gearsofwars.jpg",
      },
      {
        code: "0004",
        name: "Mario Tennis Aces",
        stock: 100,
        price: "35000",
        color: "yellow",
        featured: "false",
        img: "mario.jpeg",
      },
      {
        code: "0005",
        name: "Bloodborne",
        stock: 100,
        price: "10000",
        color: "blue",
        featured: "false",
        img: "bloodborne.png",
      },
      {
        code: "0006",
        name: "Forza Horizon 4",
        stock: 100,
        price: "20000",
        color: "red",
        featured: "true",
        img: "forza.jpg",
      },
    ],
  },
  getters: {
    byId: (state) => (id) => {
      return state.products.find((producto) => producto.code == id);
    },
    enStock: (state) => {
      return state.products.filter((producto) => {
        return producto.stock > 0;
      });
    },
    buscarImagen: (state) => {
      return state.products.forEach((producto) => {
        console.log(producto.img);
        return producto.img;
      });
    },
    /*  imgUrl() {
      for (const p in this.products) {
        console.log(this.products[p].name);
        return `../assets/${this.products[p].img}`;
      }
    }, */
    juegosDisp(state) {
      return state.products.length;
    },
    sumaTotal(state) {
      return state.products.reduce((acc, producto) => {
        return acc + producto.stock;
      }, 0);
    },
  },
  mutations: {},
  actions: {},
});

export default store;
