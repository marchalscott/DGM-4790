<template>
  <div style="max-width: 900px; margin: auto;" class="grey lighten-3">
    <v-card>
      <v-container fluid grid-list-lg>
        <h1>RESTful Server <span class="page-name">| All Products</span></h1>

        <v-container id="dropdown-example" grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-select
                v-model="select"
                :items="getRoutes"
                placeholder="All Products"
                label="GET Routes (Get Data)"
                @change="runRoute()"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm6>
              <v-select
                v-model="select"
                :items="otherRoutes"
                placeholder="Choose One"
                label="Other Routes (POST/PUT/DELETE)"
                @change="runRoute()"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap>
          <v-flex v-for="(product, index) in products" xs12 lg6 :key="`product-${index}`">
            <v-card class color="#2d2d2d" dark max-width="400">
              <v-card-title>
                <span
                  class="headline font-weight-bold"
                  style="text-transform: capitalize"
                >{{ product.name }}</span>
              </v-card-title>

              <v-card-text class="title font-weight-light">{{ product.desc | uppercase(product.desc, true) }}</v-card-text>

              <v-card-text class="title font-weight-bold">${{ product.price }}</v-card-text>
              <v-card-text class="title font-weight-light">Weight: {{ product.weight }}</v-card-text>
              <v-card-text class="title font-weight-light" style="text-transform: capitalize">Manufacturer: {{ product.manuf }}</v-card-text>

              <v-card-text>ID: {{ product._id }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios"
export default {
  methods: {
    runRoute: function() {
      this.$router.push(this.select);
    }
  },
  data() {
    return {
      info: "",
      products: [],
      select: null,
      error: null,
      getRoutes: this.$store.state.getRoutes,
      otherRoutes: this.$store.state.otherRoutes,
    };
  },
  mounted() {
    axios
      .get('https://shielded-ravine-64228.herokuapp.com/products')
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        this.error = error
      })
      .finally(() => this.loading = false)
  }
};
</script>

<style>
</style>