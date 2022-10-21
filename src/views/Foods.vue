<template>
  <div>
    <Navbar :updateKeranjang="keranjangs"/>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong class="secondary-color">Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Yuk cari makanan"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products.data" :key="product.uuid">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import ProductDataService from "../service/ProductDataService";
import OrderDataService from "../service/OrderDataService";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      keranjangs: [],
      search: '',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    setKeranjangs(dataBasket) {
      this.keranjangs = dataBasket.data;
    },
    searchFood() {
      ProductDataService.retrieveAllProducts(this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
      ProductDataService.retrieveAllProducts(this.search)
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
<style>
</style>