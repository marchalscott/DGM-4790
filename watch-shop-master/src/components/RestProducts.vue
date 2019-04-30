<template>
    <div>
        <RESTAllProducts/> 
        <RESTCreateProduct/>
        <RESTUpdateProduct/>
        <RESTDeleteProduct/>
    </div>
</template>

<script>
import { 
    RESTAllProducts, 
    RESTCreateProduct, 
    RESTUpdateProduct, 
    RESTDeleteProduct 
} from './Rest'

export default {
    components: {
        RESTAllProducts,
        RESTCreateProduct,
        RESTUpdateProduct,
        RESTDeleteProduct,
    },
}
</script>
