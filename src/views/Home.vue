<template>
  <div class="home">
    <Navbar :updateKeranjang="keranjangs"/>
    <div class="container">
      <Hero />

      <div v-if="products.data != null">
        <div class="row mt-4">
          <div class="col">
            <h2>
              Makanan
              <strong class="secondary-color">Terlaris</strong>
            </h2>
          </div>
          <div class="col">
            <router-link to="/foods" class="btn btn-success float-right">
              <b-icon-eye></b-icon-eye> Lihat Semua
            </router-link>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="product in products.data" :key="product.uuid">
            <CardProduct :product="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import ProductDataService from "../service/ProductDataService";
import OrderDataService from "../service/OrderDataService";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
      keranjangs: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
      setKeranjangs(dataBasket) {
      this.keranjangs = dataBasket.data;
    },
  },
  mounted() {
      ProductDataService.retrieveProductsRecomendation()
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
  beforeMount(){
    OrderDataService.getActiveBaskets()
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
