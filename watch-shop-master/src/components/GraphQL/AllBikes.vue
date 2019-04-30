<template>
    <v-container>
        <h1>All Bikes (Please scroll to the bottom to create/delete/update)</h1>
        <v-layout row wrap>
            <v-flex
              v-for="(product, index) in products"
              :key="`${product.name}-${index}`"
              xs3
            >
                <BikeProductCard :product="product" width="500px" height="500px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'
import BikeProductCard from '../Card/ProductCard'

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
                    brand
                    name
                    price
                    color
                    size
                    style
                }
            }`
        }
    }
</script>

<style>
</style>