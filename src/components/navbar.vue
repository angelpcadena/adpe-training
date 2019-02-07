<template>
  <v-toolbar fixed dark color="primary" app>
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
  </v-toolbar>
</template>

<style lang="scss">  
  .nav-logo { margin-right: 2em; }

  @media (min-width: 992px) {
    max-width: 900px;
  }
  
  @media (min-width: 1300px) {
    .v-toolbar__content {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0!important;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
