<template>
  <v-app>
    <v-toolbar app>
      <v-btn color="success" @click="toggle()" right>graphql data</v-btn>
      <!--<v-btn color="success" @click="toggle()" right>restful data</v-btn>-->
    </v-toolbar>
    <v-content>
      <v-container>
        <AllBikes/> 
        <BikeShopAllProducts/>
        <BikeShopConnectProduct/>
        <BikeShopCreateProduct/>
        <BikeShopUpdateProduct/>
        <BikeShopDeleteProduct/>
        <BikeShopOneProduct/>
      </v-container> 
      
    </v-content>
  </v-app>
</template>

<script>
import AllBikes from './components/AllBikes'
import BikeShopAllProducts from './components/BikeShopAllProducts'
import BikeShopConnectProduct from './components/BikeShopConnectProduct'
import BikeShopCreateProduct from './components/BikeShopCreateProduct'
import BikeShopUpdateProduct from './components/BikeShopUpdateProduct'
import BikeShopDeleteProduct from './components/BikeShopDeleteProduct'
import BikeShopOneProduct from './components/BikeShopOneProduct'


export default {
  name: 'App',
  components: {
    AllBikes,
    BikeShopAllProducts,
    BikeShopConnectProduct,
    BikeShopCreateProduct,
    BikeShopUpdateProduct,
    BikeShopDeleteProduct,
    BikeShopOneProduct
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
