<script setup>
import { RouterLink } from "vue-router";
import IconEcosystem from "../components/icons/IconEcosystem.vue";

const categories = [
  "Tecnología",
  "Entretenimiento",
  "Deportes",
  "Salud y bienestar",
  "Moda y belleza",
  "Hogar y jardín",
  "Educación",
  "Finanzas personales",
  "Viajes y turismo",
  "Gastronomía",
];
const countries = [
  "Categorias",
  "Estados Unidos",
  "México",
  "Canadá",
  "Brasil",
  "Argentina",
  "Colombia",
  "Chile",
  "Perú",
  "España",
  "Francia",
  "Italia",
  "Reino Unido",
  "Alemania",
  "Japón",
  "China",
  "India",
  "Australia",
  "Sudáfrica",
  "Egipto",
  "Rusia",
];
const settings = [
  "Configuración",
  "Ayuda",
  "Cerrar sesión",
  "Perfil",
  "Notificaciones",
  "Preferencias",
  "Tema",
  "Idioma",
  "Contacto",
  "Acerca de",
];

function enviar() {
  alert("Motivacion");
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-scroll nav">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">
        <span class="fs-4">Tiendita</span>
      </RouterLink>

      <!-- <img src="" alt="icono sitio" class="icon" /> -->

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion"
        aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse anali" id="navegacion">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu general
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/formulario">Formulario</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/galeria">Galeria</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/about">Pendiente</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/comentarios">
                  Comentarios</RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/" v-for="x in categories" :value="x">
                  {{ x }}</RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Idiomas
            </a>
            <ul class="dropdown-menu">
              <li v-for="x in countries">
                <RouterLink class="dropdown-item" to="/">{{ x }}</RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Configuración
            </a>
            <ul class="dropdown-menu">
              <li v-for="x in settings">
                <RouterLink class="dropdown-item" to="">{{ x }}</RouterLink>
              </li>
            </ul>
          </li>
        </ul>

       <!--  <form class="d-flex" role="search" @submit.prevent="enviar">
          <input type="search" class="form-control me-3" placeholder="Buscar" aria-label="Search" />
          <button class="btn btn-info">Buscar</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  font-size: 18px;
  color: black;
}

.nav {
  /* background: linear-gradient(355deg, rgb(2, 160, 17), rgb(7, 125, 29)); */
  background: radial-gradient(circle at 100% 0%,
      rgb(215, 60, 60),
      rgb(158, 28, 28));
}

.analiw {
  background-color: aqua;
}
</style>
