<template>
	<div class="c-landing">
		<section class="c-landing__splash">
			<div class="c-landing__splash-image">
				<div class="c-landing__splash-text o-container">
					<p class="c-landing__splash-text-inner">
						Ayudamos a las empresas<br />a alcanzar sus objetivos
					</p>
				</div>
			</div>
			<div class="c-landing__splash-intro">
				<div class="c-landing__splash-description o-container">
					<div>
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
				</div>
			</div>
		</section>
		<div class="o-container">
			<hr class="c-landing__splash-separator" />
		</div>
		<section class="c-landing__solutions" id="soluciones">
			<div class="o-container">
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
					<button type="button" class="c-button">
						Contáctanos
					</button>
				</div>
			</div>
		</section>
		<section class="c-landing__organization" id="propuesta">
			<div class="c-landing__organization-bg">
				<div class="c-landing__organization-bg-left">
				</div>
				<div class="c-landing__organization-bg-right">
				</div>
			</div>
			<div class="o-container">
				<h2 class="c-landing__section-title">AdPe en tu organización</h2>
				<div class="c-landing__organization-content">
					<div class="c-landing__organization-content-inner">
						<div class="c-landing__organization-content-description">
							Tu equipo
							<ul>
								<li> Una lista de lo que </li>
								<li> Tu equipo podrá lograr </li>
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
						<button class="c-button c-button--orange c-landing__organization-button">Botón</button>
					</div>
					<div class="c-landing__organization-content-inner">
						<button class="c-button c-button--orange c-landing__organization-button">Botón</button>
					</div>
				</div>
			</div>
		</section>
		<section class="c-landing__work" id="nuestro-trabajo">
			<div class="o-container">
				<h2 class="c-landing__section-title">Nuestro trabajo</h2>
				<div class="c-landing__work-showcase">
					<div class="c-landing__work-showcase-item">
						<img class="c-landing__showcase-item-image" />
						<label class="c-landing__showcase-item-label">Trabajo 1</label>
					</div>
					<div class="c-landing__work-showcase-item">
						<img class="c-landing__showcase-item-image" />
						<label class="c-landing__showcase-item-label">Trabajo 2</label>
					</div>
					<div class="c-landing__work-showcase-item">
						<img class="c-landing__showcase-item-image" />	
						<label class="c-landing__showcase-item-label">Trabajo 3</label>
					</div>
					<div class="c-landing__work-showcase-item">
						<img class="c-landing__showcase-item-image" />
						<label cla	ss="c-landing__showcase-item-label">Trabajo 4</label>
					</div>
				</div>
			</div>
		</section>
		<section id="testimonios" class="c-landing__quotes">
			<div class="o-container">
				<h2 class="c-landing__section-title">Testimonios</h2>
			</div>
			<slick :options="{ slidesToShow: 1 }">
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
		</section>
		<section id="contactanos" class="c-landing__contact">
			<div class="o-container">
				<h2 class="c-landing__section-title">Contáctanos</h2>
				<form>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
	import Slick from "vue-slick"

	export default {
		name: "landing",
		components: { Slick }
	}
</script>

<style lang="css">
		@import "../../node_modules/slick-carousel/slick/slick.css";
		@import "../../node_modules/slick-carousel/slick/slick-theme.css";
</style>
