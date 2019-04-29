<template>
<v-flex xs12 sm6 offset-sm3>
    <v-card flat tile style="border:1px solid #ccc;margin: 10px;">
        <v-img aspect-ratio="3" :src="product.imagelink" height="400px" class="black--text" style="text-align: center;background-color:#F0F0F0;">
            <h3 class="headline mb-0">{{ product.name }}</h3>
        </v-img>
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
