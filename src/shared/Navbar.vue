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
  alert("iiiii");
}
</script>

<template>
  <nav class="nav">
    <IconEcosystem />
    <!-- <img src="" alt="icono sitio" class="icon" /> -->

    <select name="categ" id="categ" class="dropdown">
      <option class="opcion" v-for="x in categories" :value="x">
        {{ x }}
      </option>
    </select>

    <select name="" id="" class="dropdown">
      <option class="opcion" v-for="x in countries" :value="x">
        {{ x }}
      </option>
    </select>

    <select name="" id="" class="dropdown">
      <option class="opcion" v-for="x in settings" :value="x">{{ x }}</option>
    </select>

    <form @submit.prevent="enviar">
      <input type="text" />
      <button class="submit btn btn-danger">Buscar</button>
    </form>
    <RouterLink to="/formulario">Formulario</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  min-height: 4rem;
  width: 100%;
  background-color: darkgreen;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
}
.dropdown {
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  background-color: transparent;
}
.dropdown .opcion {
  background-color: transparent;
  color: black;
  font-size: 1rem;
  border-bottom: 1px dotted yellow;
}
.submit {
  color: black;
  margin-left: 1rem;
}
</style>
