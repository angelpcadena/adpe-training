<template>
	<v-app>
		<navbar></navbar>
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
		}
	}
</script>