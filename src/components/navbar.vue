<template>
  <v-toolbar fixed dark color="primary" app>
    <v-layout row wrap class="outer-wrapper">
      <v-container py-0 my-0>
        <v-flex xs12 class="inner-wrapper">
          <v-layout row wrap class="nav-items">
            <v-avatar class="nav-logo" @click="$root.goTo(0)">
              <img src="~@/assets/images/logo-temp.png" />
            </v-avatar>
            <v-toolbar-items>
              <v-btn flat @click="$root.goTo('#soluciones')">Soluciones</v-btn>
              <v-btn flat @click="$root.goTo('#propuesta')">Propuesta</v-btn>
              <v-btn flat @click="$root.goTo('#nuestro-trabajo')">Trabajo</v-btn>
              <!-- <v-btn flat @click="$root.goTo('#testimonios', scrollOptions)">Testimonios</v-btn> -->
              <v-btn flat @click="$root.goTo('#contactanos')">Contáctanos</v-btn>
            </v-toolbar-items>
          </v-layout>
        </v-flex>
      </v-container>
    </v-layout>
  </v-toolbar>
</template>

<style lang="scss">  
  .outer-wrapper, .inner-wrapper, .nav-items {
    height: 100%;
  }

  .nav-items {
    align-items: center;
  }
  
  .nav-logo { margin-right: 2em; }
</style>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
