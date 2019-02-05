<template>
	<v-app>
		<div class="o-layout">
			<header class="o-layout__header">
				<div class="o-container">
					<nav class="c-main-nav">
						<router-link to="/" class="c-main-nav__logo">
							<img src="~@/assets/images/logo-temp.png" class="c-main-nav__logo-inner" />
						</router-link>
						<ul class="c-main-nav__items">
							<li class="c-main-nav__item">
								<a href="#soluciones" class="c-main-nav__anchor">
									Soluciones
								</a>
							</li>
							<li class="c-main-nav__item">
								<a href="#propuesta" class="c-main-nav__anchor">
									Propuesta
								</a>
							</li>
							<li class="c-main-nav__item">
								<a href="#nuestro-trabajo" class="c-main-nav__anchor">
									Trabajo
								</a>
							</li>
							<li class="c-main-nav__item">
								<a href="#testimonios" class="c-main-nav__anchor">
									Testimonios
								</a>
							</li>
							<li class="c-main-nav__item">
								<a href="#contactanos" class="c-main-nav__anchor">
									Contáctanos
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main class="o-layout__content">
				<router-view></router-view>
			</main>
			<footer class="o-layout__footer c-main-footer">
				<div class="c-main-footer__top">
					<div class="o-container">
						<router-link to="/" class="c-main-footer__logo">
							<img src="~@/assets/images/logo-temp.png" alt="AdPe Training" class="c-main-footer__logo-inner" />
						</router-link>
					</div>
				</div>
				<div class="c-main-footer__bottom">
					<div class="o-container">
						AdPe Training © 2018
					</div>
				</div>
			</footer>
		</div>
	</v-app>
</template>

<style lang="scss">
	html {
		background-color: white;
	}

	body {
		font-size: 14px;
		font-family: 'Quicksand'
	}
</style>