<template>
  <div>
        <v-container>
            <h2>Create a Product</h2>
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
          
      <v-btn @click="submitProduct()">Create Product</v-btn>
        {{ error }}
        {{ returnedProduct }}      
        </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
      error: "",
      product: {
      name: "",
      price: "",
      color: "",
      size: "",
    },
    returnedProduct: null
  }),
  methods: {
    createProduct() {
      const ProductData = {
        name: this.product.name,
        price: parseInt(this.product.price),
        color: this.product.color,
        size: this.product.size
      };
      // eslint-disable-next-line
      console.log(ProductData);
      axios
        .post(
          "https://shielded-ravine-64228.herokuapp.com/product/create",
          ProductData
        )// eslint-disable-next-line
        .then(res => {
          // eslint-disable-next-line
          console.log("Product Created");
          this.$router.push("/");
        })
        // eslint-disable-next-line
        .catch(error => console.log(error));
    }
  }
};
</script>
