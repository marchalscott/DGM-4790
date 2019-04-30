<template>
  <v-app>
    <v-toolbar app>
      <v-btn color="success" @click="toggle()" right>graphql data</v-btn>
      <v-btn color="success" @click="toggle()" right>RESTful</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <AllBikes/> 
        <BikeShopCreateProduct/>
        <BikeShopUpdateProduct/>
        <BikeShopDeleteProduct/>
        <RESTAllProducts/>
      </v-container> 
      
    </v-content>
  </v-app>
</template>

<script>
import AllBikes from './components/AllBikes'
import BikeShopCreateProduct from './components/BikeShopCreateProduct'
import BikeShopUpdateProduct from './components/BikeShopUpdateProduct'
import BikeShopDeleteProduct from './components/BikeShopDeleteProduct'
import RESTAllProducts from './components/RESTAllProducts'


export default {
  name: 'App',
  components: {
    AllBikes,
    BikeShopCreateProduct,
    BikeShopUpdateProduct,
    BikeShopDeleteProduct,
    RESTAllProducts

  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle: function(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>
