<template>
<v-flex xs12 sm6 offset-sm3>
    <v-card flat tile style="border:2px solid red;margin: 10px;">
            <h3 class="headline mb-0">{{ product.name }}</h3>
        <v-card-title primary-title>
            <div>
                <!-- <h3 class="headline mb-0">{{ product.name }}</h3> -->
                <ul>
                    <li>Price: ${{ product.price }}</li>
                    <li>Color: {{ product.color }}</li>
                    <li>Size: {{ product.size }}</li>
                    <br>
                    <li>Product ID: {{ product.id }}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
</v-flex>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
