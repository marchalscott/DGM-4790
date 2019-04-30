<template>
    <v-container>
        <h1>All Products (RESTful)</h1>
        <v-layout row wrap>
            <v-flex
              v-for="(product, index) in products"
              :key="`${product.name}-${index}`"
              xs3
            >
                <ProductCard :product="product" width="500px" height="500px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import ProductCard from './ProductCard.vue'
    export default {
        name: "display",
        components: {
            ProductCard
        },
        data() {
            return {
                info: "",
                products: []
            }
        },
    created() {
        axios
        .get('https://shielded-ravine-64228.herokuapp.com/products')
        .then((res) => {
            this.rockets = res.data
        })
        // eslint-disable-next-line
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>
</style>