<template>
  <div class="about">
    <v-container>
        <h2>View One Product</h2>
        <v-flex xs6>
        <v-text-field v-model="myProduct.id" label="ID" required outline></v-text-field>
        </v-flex>
      <v-btn v-on:click="getOneGraphql()">One</v-btn>
        <div v-show="isOpen"> {{ error }} {{ myProduct }} </div>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {
        id: "",
        name: "",
        price: "",
        size: ""
      },
      isOpen: false
    };
  },
  methods: {
    getOneGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query oneProduct (
              $id: ID
            ){
              product(where: {id: $id}
              ) {
                id
                name
                price
                size
              }
            }
          `,
          variables: {
            id: this.myProduct.id,
            name: this.myProduct.name,
            price: this.myProduct.price,
            size: this.myProduct.size
          }
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
