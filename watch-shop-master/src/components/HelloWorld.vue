<template>
<v-container>
  <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
  <v-layout
    text-xs-center
    wrap 
>


<v-flex xs12 sm6 offset-sm3>
      <v-card>
             <v-card-actions class="blue-grey lighten-3">
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>

        <v-card-title primary-title class="d-flex blue-grey lighten-5">
          <div>
            <h3 class="headline font-weight-light"> {{ name }}</h3>
            <div class="font-weight-medium"> {{ color }} </div>
             <div class="font-weight-medium"> {{ size }} </div>
              <div class="display-1 font-weight-bold"> ${{ price }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="d-flex blue-grey lighten-5">
          <v-btn class="white--text" color="blue">BUY</v-btn>

        </v-card-actions>

              
      </v-card>
    </v-flex>


<div> {{ info }}
    
    
</div>
</v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
import gql from 'graphql-tag'

export default {
  data() {
    return {
      name: "S Series GMDS6900MC-7",
      price: 99,
      color: "White",
      size: "Women",
      
      info: "",
      products: [],
       items: [
    {
      text: 'Home',
      disabled: false,
      href: 'breadcrumbs_dashboard'
    },
    {
      text: 'Products',
      disabled: false,
      href: 'breadcrumbs_link_1'
    },
    {
    text: 'Details',
    disabled: true,
    href: 'breadcrumbs_link_2'
    }
  ],
    }
  },
   
  mounted () {
  },
  apollo: {
    products: gql`query {
      products {
       id
       name
       price
       color
       size
      }
    }`,
   }
  };
  </script>
  <style>
  </style>
    