<template>
    <v-container>
        <h1>All Bikes</h1>
        <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product.name"
              xs3
            >
                <BikeProductCard :product="product" width="500px" height="500px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'
import BikeProductCard from './BikeProductCard.vue'

    export default {
        name: "display",
        components: {
            BikeProductCard
        },
        data() {
            return {
                info: "",
                products: []
            }
        },
        mounted() {
            // 
        },
        apollo: {
            products: gql`query{
                products {
                    id
                    name
                    price
                    color
                    size
                }
            }`
        }
    }
</script>

<style>
</style>