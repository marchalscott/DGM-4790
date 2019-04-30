<template>
  <div>
        <v-container>
             <h2>Delete a Product</h2>
          <v-flex xs6>
            <v-text-field v-focus v-model="product.id" label="id" required outline></v-text-field>
          </v-flex>
      <v-btn color="error" @click="submitDelete()">Delete</v-btn>
            {{ error }}
            {{ returnedProduct }}
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    product: {
        id: ""
    },
    returnedProduct: null
  }),
  methods: {
    submitDelete: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation deleteProduct(
                    $id: ID
                ) {
                     deleteProduct (where: {
                     id: $id 
                     })
                    {
                        id
                    }
                 }
          `,
          variables: {
            id: this.product.id,
          }
        })
        .then(res => {
          this.returnedProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
