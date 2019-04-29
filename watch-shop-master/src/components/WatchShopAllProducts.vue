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
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {},
      isOpen: false
    };
  },
  methods: {
    getAllGraphql: function() {
      // here you can get the data
      this.$apollo
        .query({
          query: gql`
            query allProducts {
              products {
                id
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
