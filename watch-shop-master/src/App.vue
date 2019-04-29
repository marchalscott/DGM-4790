<template>
  <v-app>
    <v-toolbar app>
        
      <!--<v-btn color="success" @click="toggle()" right>graphql data</v-btn>-->
      <v-btn color="success" @click="toggle()" right>restful data</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <WatchShopAllProducts/>
        <WatchShopCreateProduct/>
        <WatchShopUpdateProduct/>
        <WatchShopDeleteProduct/>
         <display/> 
      </v-container> 
      
    </v-content>
  </v-app>
</template>

<script>
import display from './components/display'
import WatchShopAllProducts from './components/WatchShopAllProducts'
import WatchShopCreateProduct from './components/WatchShopCreateProduct'
import WatchShopUpdateProduct from './components/WatchShopUpdateProduct'
import WatchShopDeleteProduct from './components/WatchShopDeleteProduct'


export default {
  name: 'App',
  components: {
    display,
    WatchShopAllProducts,
    WatchShopCreateProduct,
    WatchShopUpdateProduct,
    WatchShopDeleteProduct
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
