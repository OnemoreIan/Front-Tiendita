<script setup>
import { ref } from "vue";
const comentario = ref("");
const info = ref([]);
const usuario = ref('');
const api = "https://backend-tiendita-production.up.railway.app/api/comment";

function consultaComentarios() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      info.value = data;
      info.value.reverse();
    })
    .catch((err) => console.error(err));
}
consultaComentarios();

//funciones de rutas

const envioComentario = () => {
  const nuevoComentario = {
    texto: comentario.value,
    usuario: usuario.value
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
  usuario.value="";
  setTimeout(async () => {
    await consultaComentarios();
  }, 500);
};

const borrarComentario = (elemento) => {
  const configFetch = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: elemento }),
  };
  fetch(api, configFetch)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Solicitud fallida");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error('error al eliminar'+err));

  setTimeout(async () => {
    await consultaComentarios();
  }, 500);
};
</script>

<template>
  <article class="contain-fluid">
    <section class="row my-5">
      <h3>Deja tu comentario para mejorar el sitio</h3>
      <form
        class="my-2 row d-flex justify-content-center"
        @submit.prevent="envioComentario"
      >
        <div class="row col-md-3">
          <input
            class="form-control col-md-1"
            type="text"
            name="nombre"
            v-model="usuario"
            placeholder="Quien escribe?"
            required/>
          <input
            class="form-control col-md-2"
            type="text"
            name="texto"
            v-model="comentario"
            placeholder="Ingresa el comentario"
            required/>
        </div>
        <div class="col-md-1">
          <p></p>
          <button class="btn btn-success">Enviar</button>
        </div>
      </form>
      <hr>
    </section>
  </article>

  <article class="contain-fluid">
    <h3 class="mb-3">Comentarios disponibles</h3>
    <section class="row my-5" v-for="x in info">
      <div class="col-md-3">
        <h4>{{ x.usuario }}</h4>
        <p>{{ x.texto }}</p>
        <label>Fecha: {{ x.fecha }}</label>
      </div>
      <div class="col-md-3">
        <p></p>
        <button class="btn btn-danger" @click="borrarComentario(x._id)">
          Borrar
        </button>
        <p></p>
      </div>
    </section>
  </article>
</template>

<style scoped>
* {
  color: black;
}
</style>
