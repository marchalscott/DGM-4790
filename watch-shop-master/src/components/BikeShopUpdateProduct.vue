<template>
  <div class="about">
        <v-container>
            
            <h2>Update a Product</h2>
          <v-flex xs6>
            <v-text-field v-model="product.id" label="id" required outline></v-text-field>
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
      <v-btn @click="submitUpdate()">Update Product</v-btn>
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
        id: "",
        name: "",
        price: "",
        color: "",
        size: ""
    },
    returnedProduct: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
mutation updateProduct ( 
    $id: ID
    $name: String
    $price: Float
    $color: String
    $size: String
) {
    updateProduct(
        data:{ 
            name: $name
            price: $price
            color: $color
            size: $size
            }
        where:{ id: $id }    
    )
 {
    id
    name
    price
    color
    size
 }
}
          `,
          variables: {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            color: this.product.color,
            size: this.product.size,
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