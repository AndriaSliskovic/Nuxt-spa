<template>
  <v-carousel 
    cycle
    hide-delimiter-background
    progress
    progress-color="red"
    show-arrows-on-hover
    interval="4500"
    class="carousel"
  >
    <v-carousel-item
      v-for="(img, i) in images"
      :key=i
      :src="img"
      class="carousel"
    >
      <v-responsive style="align-items">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3 white--text">Some text goes here....</h3>
              <span class="subheading white--text">Some more text goes here....</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      ]
    }
  }
}
</script>

<style>
.carousel, .carousel .v-window__container, .carousel .v-carousel__item { height: 100%!important; }
.v-responsive { align-items: center; text-align: center;}
</style>