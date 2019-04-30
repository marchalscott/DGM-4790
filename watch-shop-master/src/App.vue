<template>
  <v-app>
    <v-toolbar app>
      <v-btn color="success" @click="toggle()" right>graphql data</v-btn>
      <!--<v-btn color="success" @click="toggle()" right>restful data</v-btn>-->
    </v-toolbar>
    <v-content>
      <v-container>
        <AllBikes/> 
        <BikeShopConnectProduct/>
        <BikeShopCreateProduct/>
        <BikeShopUpdateProduct/>
        <BikeShopDeleteProduct/>
      </v-container> 
      
    </v-content>
  </v-app>
</template>

<script>
import AllBikes from './components/AllBikes'
import BikeShopConnectProduct from './components/BikeShopConnectProduct'
import BikeShopCreateProduct from './components/BikeShopCreateProduct'
import BikeShopUpdateProduct from './components/BikeShopUpdateProduct'
import BikeShopDeleteProduct from './components/BikeShopDeleteProduct'


export default {
  name: 'App',
  components: {
    AllBikes,
    BikeShopConnectProduct,
    BikeShopCreateProduct,
    BikeShopUpdateProduct,
    BikeShopDeleteProduct,
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
