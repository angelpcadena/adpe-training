<template>
	<v-app>
		<navbar></navbar>
		<v-content>
			<v-container fluid pa-0>
					<router-view></router-view>
					<v-footer height="auto" class="c-main-footer">
						<v-layout fluid row wrap>
							<v-flex grey darken-4 xs12>
								<v-container>
									<router-link to="/" class="c-main-footer__logo">
										<img src="~@/assets/images/logo-temp.png" alt="AdPe Training" class="c-main-footer__logo-inner" />
									</router-link>
								</v-container>
							</v-flex>
							<v-flex black xs12 white--text>
								<v-container>
									AdPe Training © 2018
								</v-container>
							</v-flex>
						</v-layout>
					</v-footer>
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
				
			}
		}
	}
</script>