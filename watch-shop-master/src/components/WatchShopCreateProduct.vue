<template>
  <div class="about">
        <v-container>
            <h2>Create a Product</h2>
          <v-flex xs12>
            <v-text-field v-model="product.name" label="Name" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.price" label="Price" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.color" label="Color" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.size" label="Size" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.imagelink" label="imagelink" required></v-text-field>
          </v-flex>
          
      <v-btn @click="submitProduct()">Add Product</v-btn>
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
    },
    returnedProduct: {}
  }),
  methods: {
    submitProduct: function() {
      this.$apollo.mutate({
          mutation: gql`
            mutation createProduct(
                $name: String
                $price: Float
                $color: String
                $size: String
                $imagelink: String
            ) {
                createProduct(
                  data: {
                    name: $name
                    price: $price
                    color: $color
                    size: $size
                    imagelink: $imagelink
                }
              ) 
                {
                    name
                    price
                    color
                    size
                    imagelink
                }
            }
          `,
          variables: {
            name: this.product.name,
            price: this.product.price,
            color: this.product.color,
            size: this.product.size,
            imagelink: this.product.imagelink
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
