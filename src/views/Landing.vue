<template>
	<v-layout row wrap class="c-landing">
		<v-flex tag="section" class="c-landing__splash" xs12>
			<div class="c-landing__splash-image">
				<v-container class="c-landing__splash-text">
					<div class="c-landing__splash-text-inner">
						<img src="~@/assets/images/logo-temp@2x.png" alt="AdPe Training" class="c-landing__splash-logo-inner hidden-md-and-up"/>
						Ayudamos a las empresas<br />a alcanzar sus objetivos
					</div>
				</v-container>	
			</div>
			<div class="c-landing__splash-intro">
				<v-container class="c-landing__splash-description">
					<div class="hidden-sm-and-down">
						<h1 class="c-landing__splash-logo">
							<img src="~@/assets/images/logo-temp@2x.png" alt="AdPe Training" class="c-landing__splash-logo-inner"/>
						</h1>  
					</div>
					<div>
						<label class="c-landing__splash-description-title">
							Hacemos crecer tu empresa</label>
						<p class="c-landing__splash-description-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque. Aenean ex massa, bibendum in fringilla vel, ullamcorper lacinia quam. Vivamus facilisis, est in dignissim aliquet, neque arcu blandit massa, quis laoreet dolor mauris vitae elit.
						</p>
					</div>
				</v-container>
			</div>
		</v-flex>
		<v-flex xs12>
			<v-container>
				<hr class="c-landing__splash-separator" />
			</v-container>
		</v-flex>
		<v-flex id="soluciones" tag="section" class="c-landing__solutions" xs12>
			<v-container>
				<div class="c-landing__grid">
					<div class="c-landing__grid-item">
						<h2 class="c-landing__section-title">Soluciones</h2>
					</div>
					<div class="c-landing__grid-item">
						<label class="c-landing__grid-item-title">e-Learning</label>
						<p class="c-landing__grid-item-description">Descripción de solución 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque.</p>
					</div>
					<div class="c-landing__grid-item">
						<label class="c-landing__grid-item-title">Videos</label>
						<p class="c-landing__grid-item-description">Descripción de solución 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque.</p>
					</div>
					<div class="c-landing__grid-item">
						<label class="c-landing__grid-item-title">Mapeo de Procesos</label>
						<p class="c-landing__grid-item-description">Descripción de solución 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque.</p>
					</div>
					<div class="c-landing__grid-item">
						<label class="c-landing__grid-item-title">Manuales Operativos</label>
						<p class="c-landing__grid-item-description">Descripción de solución 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque.</p>
					</div>
					<div class="c-landing__grid-item">
						<label class="c-landing__grid-item-title">Cursos presenciales</label>
						<p class="c-landing__grid-item-description">Descripción de solución 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar odio id mauris sollicitudin, eget ornare risus scelerisque.</p>
					</div>
				</div>
				<div class="c-landing__solutions-cta">
					<span class="c-landing__solutions-cta-description">
						Call to Action pls click me
					</span>
					<v-btn round @click="$root.goTo('#contactanos')" large depressed color="primary darken-2">	
						Contáctanos
					</v-btn>
				</div>
			</v-container>
		</v-flex>
		<v-flex id="propuesta" tag="section" class="c-landing__organization" xs12>
			<div class="c-landing__organization-bg">
				<div class="c-landing__organization-bg-left indigo darken-2">
				</div>
				<div class="c-landing__organization-bg-right teal">
				</div>
			</div>
			<v-container>
				<h2 class="c-landing__section-title">AdPe en tu organización</h2>
				<div class="c-landing__organization-content">
					<div class="c-landing__organization-content-inner">
						<div class="c-landing__organization-content-description">
							Tu equipo
							<ul>
								<li> Una lista de lo que </li>
								<li> Tu equipo podrá l	ograr </li>
								<li> Con AdPe Solutions </li>
							</ul>
						</div>
					</div>
					<div class="c-landing__organization-content-inner">
						<div class="c-landing__organization-content-description">
							Tus clientes
							<ul>
								<li> Una lista de lo que </li>
								<li> Tus clienes podrán lograr </li>
								<li> Con AdPe Solutions </li>
							</ul>
						</div>
					</div>
				</div>
				<div class="c-landing__organization-content">
					<div class="c-landing__organization-content-inner">
						<v-btn round large depressed color="amber darken-4">	
							Botón 1
						</v-btn>
					</div>
					<div class="c-landing__organization-content-inner">
						<v-btn round large depressed color="amber darken-4">	
							Botón 2
						</v-btn>
					</div>
				</div>
			</v-container>
		</v-flex>
		<v-flex id="nuestro-trabajo" tag="section" class="c-landing__work blue-grey lighten-5" xs12>
			<v-container>
				<h2 class="c-landing__section-title">Nuestro trabajo</h2>
				<div class="c-landing__work-showcase">
					<div class="c-landing__work-showcase-item elevation-4">
						<img class="c-landing__showcase-item-image" />
						<label class="c-landing__showcase-item-label">Trabajo 1</label>
					</div>
					<div class="c-landing__work-showcase-item elevation-4">
						<img class="c-landing__showcase-item-image" />
						<label class="c-landing__showcase-item-label">Trabajo 2</label>
					</div>
					<div class="c-landing__work-showcase-item elevation-4">
						<img class="c-landing__showcase-item-image" />	
						<label class="c-landing__showcase-item-label">Trabajo 3</label>
					</div>
					<div class="c-landing__work-showcase-item elevation-4">
						<img class="c-landing__showcase-item-image" />
						<label class="c-landing__showcase-item-label">Trabajo 4</label>
					</div>
				</div>
			</v-container>
		</v-flex>
			<!-- <section id="testimonios" class="c-landing__quotes">
				<div class="o-container">
					<h2 class="c-landing__section-title">Testimonios</h2>
				</div>
				<slick :options="slickOptions">
					<div>
						<div class="o-container c-landing__quote">
							<blockquote class="c-landing__quote-item">
								<p>Este es el mejor servicio del mundo!</p>
								<footer>
									- Yo mero, CEO de mi casa
								</footer>
							</blockquote>
							<blockquote class="c-landing__quote-item">
								<p>Este es el mejor servicio del mundo!</p>
								<footer>
									- Yo mero, CEO de mi casa
								</footer>
							</blockquote>
						</div>
					</div>
					<div>
						<div class="o-container c-landing__quote">
							<blockquote class="c-landing__quote-item">
								<p>Este es el mejor servicio del mundo!</p>
								<footer>
									- Yo mero, CEO de mi casa
								</footer>
							</blockquote>
							<blockquote class="c-landing__quote-item">
								<p>Este es el mejor servicio del mundo!</p>
								<footer>
									- Yo mero, CEO de mi casa
								</footer>
							</blockquote>
						</div>
					</div>
				</slick>
			</section> -->
			<v-flex id="contactanos" tag="section" class="c-landing__contact blue-grey lighten-1" xs12>
				<v-container>
					<v-layout row wrap>
						<v-flex sm8 class="headline">
							<h2 class="c-landing__section-title">Contáctanos</h2>
							<p>
								En AdPe Training Solutions nos interesa saber acerca de lo que necesitas para llevar a tu empresa al siguiente nivel.
							</p>
							<p>
								No dudes en enviarnos cualquier duda o comentario sobre nuestro servicio, estamos a tu disposición.
							</p>
						</v-flex>
						<v-flex sm4>
							<contact-form></contact-form>
						</v-flex>
					</v-layout>
				</v-container>
			</v-flex>
	</v-layout>
</template>

<script>
	import Slick from "vue-slick"
	import ContactForm from "../components/contact-form"

	let slickOptions = {
		arrows: false
	}

	export default {
		name: "landing",
		components: { Slick, ContactForm },
		data() {
			return {
				slickOptions: slickOptions
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="css">
		@import "../../node_modules/slick-carousel/slick/slick.css";
		@import "../../node_modules/slick-carousel/slick/slick-theme.css";
</style>
