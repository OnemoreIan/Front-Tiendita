<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './shared/Navbar.vue';
import Destacado from './components/Destacado.vue';
</script>

<template>
  
  <header class="head">
    <Navbar/>
  </header>

  <article>
    <Destacado/>
  </article>

  <main class="main">
    <RouterView />
  </main>


  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  
</template>

<style scoped>
.head{
  position: sticky;
  top: 0;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  height: 100%;
  width: 100%;
}
.main{
  min-height: 80vh;
  width: 80%;
  margin: 1rem auto;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (max-width: 768px) {
    *{
        background-color: black;
    }
} */


</style>
