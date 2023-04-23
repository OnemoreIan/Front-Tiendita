<script setup>
import { ref } from "vue";
const comentario = ref("");
const info = ref([]);
const api = "http://localhost:4500/api/comment";

function consultaComentarios() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        info.value = data;
    })
    .catch((err) => console.error(err));
};
consultaComentarios();

const envioComentario = () => {
  const nuevoComentario = {
    texto: comentario.value,
  };
  const configFetch = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoComentario),
  };
  fetch(api, configFetch)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Solicitud fallida");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((e) => console.error(e));
    comentario.value = "";
    setTimeout( async() => {

        await consultaComentarios();
    },3000)
};
</script>

<template>
  <article class="contain-fluid">
    <section class="row my-5">
      <form @submit.prevent="envioComentario">
        <div>
            <p>Ingresar el comentario </p>
          <input
            type="text"
            name="texto"
            v-model="comentario"
            placeholder="Ingresa el comentario"
            required
          />
        </div>
        <button>Enviar</button>
      </form>
    </section>
  </article>

  <article class="contain-fluid">
    <section class="row my-5" v-for="x in info">
      <h4>Comentario</h4>
      <p>{{ x.texto }}</p>
      <label>Fecha: {{ x.fecha }}</label>
    </section>
  </article>
</template>

<style scoped>
* {
  color: black;
}
</style>
