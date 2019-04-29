<template>
  <div>
    <nav>
      <router-link class="margin" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        }
      ]
    }
  }
}
</script>
<style>
.margin {
  margin-right: 10px;
}
</style>
