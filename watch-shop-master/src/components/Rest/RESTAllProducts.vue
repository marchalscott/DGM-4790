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
import { get } from '../../helpers/api'
import ProductCard from '../Card/ProductCard'
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
        methods: {
            getProductsByAxios() {
                 axios
                    .get('https://shielded-ravine-64228.herokuapp.com/products')
                    .then((res) => {
                        this.products = res.data
                        // eslint-disable-next-line
                        console.log(res)
                    })
                    // eslint-disable-next-line
                    .catch(error => console.log(error))
            },
            async getProducts() {
                try {
                    const res = await get('https://shielded-ravine-64228.herokuapp.com/products')
                    // eslint-disable-next-line
                    console.log(res)
                } catch(e) {
                    // eslint-disable-next-line
                    console.log({...e})
                }
            }
        },
        mounted() {
            this.getProductsByAxios()
        }
        
}
</script>

<style scoped>
</style>