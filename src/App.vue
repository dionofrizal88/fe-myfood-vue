<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Footer
  }
}
</script>
