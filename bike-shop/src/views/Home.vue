<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BikeShop msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BikeShop from '@/components/BikeShop.vue'

export default {
  name: 'home',
  components: {
    BikeShop
  }
}
</script>
