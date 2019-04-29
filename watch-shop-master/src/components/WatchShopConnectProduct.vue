<template>
  <div>
      <v-container>
          <h2>View Related Products</h2>
    <v-btn v-on:click="getAllGraphql(), toggle()">Related Products</v-btn>
    <div v-show="isOpen">{{ myProduct }} {{ error }}</div>

   </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {},
      isOpen: false
    };
  },
  methods: {
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query productConnect {
                productsConnection {
                    edges {
                    node {
                        name
                    }
                    }
                    pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    }
                }
                }
          `
        })
        .then(res => {
          this.myProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    },
    toggle: function() {
        this.isOpen = !this.isOpen
    }
  }
};
</script>
<style>
</style>
