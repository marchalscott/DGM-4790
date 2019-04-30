<template>
  <div>
    <v-container>
        <h2>All Products</h2>
        <v-btn v-on:click="getAllGraphql(), toggle()">Get All</v-btn>
        <v-flex xs6>
        <v-card v-show="isOpen" xs6>{{ myProduct.products }}  {{ error }}</v-card>
        </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { get } from '../helpers/api'
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: [],
      isOpen: false
    };
  },
  methods: {
    async getAllProductsByAxios() {
      const url = 'https://shielded-ravine-64228.herokuapp.com/products'
      const headers = {
          'Content-Type': 'application/json; charset=utf-8',
      }

      // call API
      const res = await axios({
          method: 'GET',
          url: url,
          headers,
      })
      // eslint-disable-next-line
      console.log(res)
    },
    async getAllProductsByRest() {
      const url = 'https://shielded-ravine-64228.herokuapp.com/products'
      try {
          const products = await get(url)
          // eslint-disable-next-line
          console.log(products)
      } catch(e) {
        this.error = e
      }
    },
    getAllGraphql: function() {
      // here you can get the data
      this.$apollo
        .query({
          query: gql`
            query allProducts {
              products {
                _id
                name
                price
                color
                size
              }
            }
          `
        })
        .then(res => {
          this.myProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    },
    toggle: function() {
        this.isOpen = !this.isOpen
    }
  }
};
</script>
<style>
</style>
