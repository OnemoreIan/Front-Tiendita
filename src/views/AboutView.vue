<script setup>
import { ref } from 'vue';
const info = ref([]); 

function obtenerDatos() {
  fetch('http://localhost:4500/api/general')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      info.value = data;
    })
    .catch(err => console.error(err))
}
obtenerDatos();
</script>

<template>
  <article class="contain-fluid">

    <section class="row my-5">

      <div class="card p-2 my-2" v-for="x in info">
        <p>{{ x.name }}</p>
        <p>{{ x.price }}</p>
        <p>{{ x.quantity }}</p>
        <p>{{ x.description }}</p>
      </div>
      
    </section>

  </article>

</template>

<style scoped>
*{
  color: black;
}
p{
  color: black;
}
.about{
  background-color: aqua;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
