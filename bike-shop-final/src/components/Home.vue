<template>
	<div>
		<h1>Trade or view your Crypto Portfolio</h1>
		<h3>How the site works.</h3>
		<h6>- We display your total wallet amount in the top right corner.</h6>
		<h6>- Please use your wallet balance to purchase your favorite crypto currency.</h6>
		<h6>- Watch the date, buy on low and sell on high. Grow your profits!</h6>
		<h6>- Click on End Day to begin a new day</h6>
		<hr>

<ul class="media-list">
  <li class="media">
    <a class="pull-left" href="#">
      <img class="media-object" data-src="images/src/components/stocks/reddit.png">
    </a>
    <div class="media-body">
      <h4 class="media-heading">Media heading</h4>
      ...
 
      <!-- Nested media object -->
      <div class="media">
          <a class="pull-left" href="#">
    <img class="media-object" data-src="images/src/components/stocks/reddit.png">
 		  </a>
     </div>
    </div>
  </li>
</ul>

<p>Your Funds: {{ funds | currency }}</p>

	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>