<template>
  <v-app>
    <v-toolbar app>
        
      <!--<v-btn color="success" @click="toggle()" right>graphql data</v-btn>-->
      <v-btn color="success" @click="toggle()" right>restful data</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <WatchShopAllProducts/>
        <WatchShopConnectProduct/>
        <WatchShopCreateProduct/>
        <WatchShopUpdateProduct/>
        <WatchShopDeleteProduct/>
        <WatchShopOneProduct/>
         <display/> 
      </v-container> 
      
    </v-content>
  </v-app>
</template>

<script>
import display from './components/display'
import WatchShopAllProducts from './components/WatchShopAllProducts'
import WatchShopConnectProduct from './components/WatchShopConnectProduct'
import WatchShopCreateProduct from './components/WatchShopCreateProduct'
import WatchShopUpdateProduct from './components/WatchShopUpdateProduct'
import WatchShopDeleteProduct from './components/WatchShopDeleteProduct'
import WatchShopOneProduct from './components/WatchShopOneProduct'


export default {
  name: 'App',
  components: {
    display,
    WatchShopAllProducts,
    WatchShopConnectProduct,
    WatchShopCreateProduct,
    WatchShopUpdateProduct,
    WatchShopDeleteProduct,
    WatchShopOneProduct
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
