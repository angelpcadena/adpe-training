<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app absolute temporary>
			<v-list class="pt-0" dense>
        <v-list-tile>
          <!-- <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>Soluciones</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
				<v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Propuesta</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
				<v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Trabajo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
				<!-- <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Testimonios</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
				<v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Contactanos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
		</v-navigation-drawer>
		<navbar v-bind:toggle.sync="drawer"></navbar>
		<v-content>
			<v-container fluid pa-0>
					<router-view></router-view>
					<footer class="c-main-footer">
						<div class="c-main-footer__top grey darken-4">
							<v-container>
								<router-link to="/" class="c-main-footer__logo">
									<img src="~@/assets/images/logo-temp.png" alt="AdPe Training" class="c-main-footer__logo-inner" />
								</router-link>
							</v-container>
						</div>
						<div class="c-main-footer__bottom black">
							<v-container>
								AdPe Training © 2018
							</v-container>
						</div>
					</footer>	
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import Navbar from './components/navbar'

	export default {
		components: {
			Navbar
		},
		data() {
			return {
				drawer: null
			}
		}
	}
</script>