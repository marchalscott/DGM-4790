<template>
  <div>
      <v-btn color="info" v-on:click="getAllGraphql()">All</v-btn>
	  {{myItem}}
	  error: {{error}}
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
		error: '',
    	myItem: {}
    };
  },
  methods: {
    getAllGraphql: function() {
     this.$apollo
        .query({
          query: gql`
			[exports.all = (req, res) => {
    Product.find()
    .then( (allProducts) => res.send(allProducts));
}]
          `
        })
        .then(res => {
          this.myItem = res.data;
        })
	 	.catch(err => {
		this.error = err; 
	 })
    }
  }
};
</script>
<style>
</style>