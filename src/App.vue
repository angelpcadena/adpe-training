<template>
  <div class="o-layout">
    <header class="o-layout__header">
      <div class="o-container">
        <nav class="c-main-nav">
          <a href="/">
            <img />
          </a>
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
      hola
    </footer>
  </div>
</template>
