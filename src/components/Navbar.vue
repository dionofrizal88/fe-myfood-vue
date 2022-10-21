<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#" class="col-md-1">
          <img src="../assets/logo.png" width="110%" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Makanan</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang
                <b-icon-bag></b-icon-bag>
                <span
                  class="badge badge-success ml-2"
                >{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import OrderDataService from "../service/OrderDataService";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  // props: ["updateKeranjang", ""],
  props: {
    updateKeranjang : {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = (data.data) ? data.data : [];
    },
  },
  mounted() {
    OrderDataService.getActiveBaskets()
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  },
};
</script>

<style></style>
