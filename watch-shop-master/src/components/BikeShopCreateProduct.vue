<template>
  <div>
        <v-container>
            <h2>Create a Product</h2>
          <v-flex xs6>
            <v-text-field v-focus v-model="product.brand" label="Brand" required outline></v-text-field>
          </v-flex> 
          <v-flex xs6>
            <v-text-field v-model="product.name" label="Name" required outline></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field v-model="product.price" label="Price" required outline></v-text-field>
          </v-flex>
          <v-flex xs6>
          <v-text-field v-model="product.color" label="Color" required outline></v-text-field>
          </v-flex>   
          <v-flex xs6>
            <v-text-field v-model="product.size" label="Size" required outline></v-text-field>
          </v-flex>  
          <v-flex xs6>
            <v-text-field v-model="product.style" label="Style" required outline></v-text-field>
          </v-flex> 
          
      <v-btn @click="submitProduct()">Create Product</v-btn>
        {{ error }}
        {{ returnedProduct }}      
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    product: {
    name: "",
    price: "",
    color: "",
    size: "",
    style: ""
    },
    returnedProduct: null
  }),
  methods: {
    submitProduct: function() {
      this.$apollo.mutate({
          mutation: gql`
            mutation createProduct(
                $brand: String!
                $name: String!
                $price: Float!
                $color: String!
                $size: String!
                $style: String!
            ) {
                createProduct(
                  data: {
                    brand: $brand
                    name: $name
                    price: $price
                    color: $color
                    size: $size
                    style: $style
                }
              ) 
                {
                    brand
                    name
                    price
                    color
                    size
                    style
                }
            }
          `,
          variables: {
            brand: this.product.brand,
            name: this.product.name,
            price: parseFloat(this.product.price),
            color: this.product.color,
            size: this.product.size,
            style: this.product.style
          }
        })
        .then(res => {
          this.returnedProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
