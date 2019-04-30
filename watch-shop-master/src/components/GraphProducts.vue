<template>
    <div>
        <AllBikes/> 
        <BikeShopCreateProduct/>
        <BikeShopUpdateProduct/>
        <BikeShopDeleteProduct/>
    </div>
</template>

<script>
import { AllBikes, BikeShopCreateProduct, BikeShopUpdateProduct, BikeShopDeleteProduct } from './GraphQL'

export default {
    components: {
        AllBikes,
        BikeShopCreateProduct,
        BikeShopUpdateProduct,
        BikeShopDeleteProduct,
    },
}
</script>
