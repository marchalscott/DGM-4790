<template>
  <v-app>
    <v-toolbar app>
      <v-btn color="success" @click="isGraphQL = true" right>graphql data</v-btn>
      <v-btn color="success" @click="isGraphQL = false" right>RESTful</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <GraphProducts v-if="isGraphQL"/>
        <RestProducts v-else/>
      </v-container> 
    </v-content>
  </v-app>
</template>

<script>
import GraphProducts from './components/GraphProducts'
import RestProducts from './components/RestProducts'


export default {
  name: 'App',
  components: {
    GraphProducts,
    RestProducts

  },
  data () {
    return {
      isGraphQL: true
    }
  },
}
</script>
