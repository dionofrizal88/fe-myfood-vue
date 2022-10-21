<template>
  <div class="food-detail">
    <Navbar :updateKeranjang="keranjangs"/>
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Makanan</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Pesan</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3 mb-5">
        <div class="col-md-6">
          <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong class="secondary-color">{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt : Pedes, Nasi Setengah .."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import axios from "axios";
import ProductDataService from "../service/ProductDataService";
import OrderDataService from "../service/OrderDataService";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setProduct(dataProduct) {
      this.product = dataProduct.data[0];
    },
    setKeranjangs(dataBasket) {
      this.keranjangs = dataBasket.data;
    },
    pemesanan() {
      const form = new FormData()
      const jumlah = this.pesan.jumlah
      var keterangan = this.pesan.keterangan

      if(!keterangan){
        keterangan = ""
      }

      form.append('jumlah', jumlah);
      form.append('keterangan', keterangan);

      if (jumlah) {
        // this.pesan.products = this.product;
         OrderDataService.addProductToBasket(this.$route.params.uuid, form)
        // axios
        //   .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang"})
            this.$toast.success("Sukses Masuk Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    ProductDataService.retrieveProduct(this.$route.params.uuid)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
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