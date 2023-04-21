<script setup>
import axios from 'axios';
import { ref } from "vue";
const nombre = ref("");
const precio = ref(Number);
const descripcion = ref("");


const envio = () => {
  //post 
  const blueprint = {
    name: nombre.value,
    price: precio.value,
    description: descripcion.value,
  };
  //"http://localhost:4500/articulo"

  /* axios.post('http://localhost:3900/api/recepcion',{
    val: ejemplo.name,
    info: ejemplo.price,
    esternocleido: ejemplo.descripcion
  })
  .then(res => console.log('Exito'+res))
  .catch(e => console.log(e)) */
  const configFetch = {
    method:"POST",
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify(blueprint)
  };
  

  fetch("http://localhost:3900/api/almacenar",configFetch)
    .then(response => {
      if(!response.ok){
        throw new Error('Fallo al enviar la solicitud');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch((error) => console.error(error));

    nombre.value="";
    precio.value=null;
    descripcion.value="";
};

/*
async handleSubmit() {
      const { data } = await axios.post('/api/user', this.user);
      console.log(data);
      */

</script>

<template>

  <article class="contain-fluid">

    <section class="row my-5">

      <h3>Agregar contenido a la base de datos</h3>
  
      <form class="formulario" @submit.prevent="envio">
        <p>Envio de informacion a la tiendita</p>
        <div class="input">
          <label>Nombre del producto</label>
          <input
            type="text"
            name="nom"
            v-model="nombre"
            placeholder="Nombre del producto"
            required/>
        </div>
        <div class="input">
          <label>Precio del producto</label>
          <input type="number" min="1" name="pice" v-model="precio" required />
        </div>
        <div class="area">
          <label class="labelArea">Descripcion del producto
            <span class="optional">*Opcional</span></label>
          <textarea
            name="descripcion"
            v-model="descripcion"
            placeholder="(Opcional) descripcion del producto"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>

    </section>

  </article>

</template>

<style scoped>
* {
  text-align: center;
  color: black;
}
.input {
  padding: 1rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 1rem;
}
.area {
  padding: 1rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
