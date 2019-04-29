<template>
  <v-app>
    <v-toolbar app>
        
      <v-spacer></v-spacer>
      <v-btn color="success" @click="toggle()" right>graphql data</v-btn>
      <v-btn @click="toggle()" right>restful data</v-btn>
    </v-toolbar>
    <v-content>
      <v-container v-show="isOpen">
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
      imagelogo: "",
      //
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
