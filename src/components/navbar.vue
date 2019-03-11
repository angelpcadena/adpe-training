<template>
  <v-toolbar fixed dark color="primary" app>
    <v-layout row wrap class="outer-wrapper">
      <v-container class="menu-wrapper" py-0 my-0>
        <v-flex xs12 class="inner-wrapper">
          <v-layout row wrap class="nav-items">
            <v-menu content-class="nav-menu">
              <template v-slot:activator="{ on }">
                <v-toolbar-side-icon class="hidden-md-and-up" v-on="on"></v-toolbar-side-icon>
              </template>
              <v-list>
                <v-list-tile @click="$root.goTo('#soluciones')">
                  <v-list-tile-title>Soluciones</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$root.goTo('#propuesta')">
                  <v-list-tile-title>Propuesta</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$root.goTo('#nuestro-trabajo')">
                  <v-list-tile-title>Trabajo</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$root.goTo('#contactanos')">
                  <v-list-tile-title>Contáctanos</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-avatar class="nav-logo" @click="$root.goTo(0)">
              <img src="~@/assets/images/logo-temp.png" />
            </v-avatar>
            <v-toolbar-items class="hidden-sm-and-down">
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
  .outer-wrapper,
  .inner-wrapper,
  .nav-items {
    height: 100%;
  }

  .v-toolbar__content {
    padding: 0!important;
  }

  .nav-items {
    align-items: center;
  }
  
  .nav-logo { margin-right: 2em; }

  .nav-menu.v-menu__content {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    left: 0 !important;
    max-width: 100%;
    position: fixed;
    top: 56px !important;
    width: 100%;
  }

  @media only screen and (max-width: 959px) {
    .menu-wrapper { padding: 0px!important; }
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
