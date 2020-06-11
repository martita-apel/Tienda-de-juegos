import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    totalVentas: 0,
    products: [
      {
        id: "0001",
        name: "Sekiro",
        stock: 100,
        price: "30000",
        color: "red",
        featured: "true",
        img: "sekiro.jpg",
      },
      {
        id: "0002",
        name: "Fifa 21",
        stock: 100,
        price: "25000",
        color: "blue",
        featured: "false",
        img: "fifa21.jpg",
      },
      {
        id: "0003",
        name: "Gears of Wars 4",
        stock: 100,
        price: "15000",
        color: "green",
        featured: "true",
        img: "gearsofwars.jpg",
      },
      {
        id: "0004",
        name: "Mario Tennis Aces",
        stock: 100,
        price: "35000",
        color: "yellow",
        featured: "false",
        img: "mario.jpeg",
      },
      {
        id: "0005",
        name: "Bloodborne",
        stock: 100,
        price: "10000",
        color: "blue",
        featured: "false",
        img: "bloodborne.png",
      },
      {
        id: "0006",
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
      return state.products.find((producto) => {
        return producto.id == id;
      });
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
    juegosVendidos(state) {
      return state.products.filter((producto) => {
        return producto.stock !== 100;
      });
    },
    sumaTotal(state) {
      return state.products.reduce((acc, producto) => {
        return acc + producto.stock;
      }, 0);
    },
  },
  mutations: {
    SELL_PRODUCT: (state, producto) => {
      let prod = state.products.find((prod) => prod.id == producto.id);
      prod.stock--;
    },
    UPDATE_TOTAL(state, producto) {
      state.totalVentas += parseInt(producto.price);
    },
  },
  actions: {
    sellStock(context, producto) {
      context.commit("SELL_PRODUCT", producto);
    },

    async sellProduct({ dispatch }, producto) {
      await dispatch("processSale", producto)
        .then(() => {
          alert("Venta procesada exitosamente.");
        })
        .catch(() => {
          alert("Venta rechazada. No hay stock o el producto no existe.");
        });
      dispatch("updateTotal", producto);
    },
    processSale({ commit, state }, producto) {
      return new Promise((resolve, reject) => {
        let randomTime = Math.floor(Math.random() * 2000 + 1);
        setTimeout(() => {
          let success = false;
          let prod = state.products.find((prod) => prod.id == producto.id);
          if (prod && prod.stock > 0) {
            commit("SELL_PRODUCT", prod);
            success = true;
          }
          success ? resolve() : reject();
        }, randomTime);
      });
    },
    updateTotal({ commit }, producto) {
      return new Promise(() => {
        let randomTime = Math.floor(Math.random() * 1000 + 1);
        setTimeout(() => {
          commit("UPDATE_TOTAL", producto);
        }, randomTime);
      });
    },
  },
});

export default store;
