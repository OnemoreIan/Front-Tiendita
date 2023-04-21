<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const preVista = [
  {titulo: "Iphone SE",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:3847,img:"https://m.media-amazon.com/images/I/71rc5ZOayHL._AC_UL400_.jpg"},
  {titulo: "Samsung Galaxy S20 Ultra",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:7500,img:"https://m.media-amazon.com/images/I/612IsCbjo5L._AC_UL400_.jpg"},
  {titulo: "Iphone 11",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:6866,img:"https://m.media-amazon.com/images/I/31PpUfTCiFL._AC_UL400_.jpg"},
  {titulo: "Iphone 13",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:14324,img:"https://m.media-amazon.com/images/I/71EvexPYtWL._AC_UL400_.jpg"},
  {titulo: "Google Pixel 6",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:5696,img:"https://m.media-amazon.com/images/I/81eLhDX1TRL._AC_UL400_.jpg"},
  {titulo: "Samsung Galaxy Z Flip",texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia",precio:11500,img:"https://m.media-amazon.com/images/I/71NKRXSR3XL._AC_UL400_.jpg"},
]

const enlistado = [
    "https://m.media-amazon.com/images/I/71rc5ZOayHL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/612IsCbjo5L._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/31PpUfTCiFL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71EvexPYtWL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/81eLhDX1TRL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71NKRXSR3XL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61X8qZ+VmkL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71wpsEiKDfL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/81mYHETHGEL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61RZqNMKT6S._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61SOUv7GCpL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71FPETeyPaL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/513NI5xpYjL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/617FFRO3vcL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61C7JqmRXUL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/518s1M0KMaL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/51wOdWN7PeL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/31ILQoX1tSL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61YsYjlywtL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/51Jv+zvCoaL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71Nv1150yrL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/61zoZotaooL._AC_UL400_.jpg",
    "https://m.media-amazon.com/images/I/71KGfojh2wL._AC_UL400_.jpg",
]

</script>

<template>

  <article class="contain-fluid">

    <section v-for="x in preVista" class="row my-5">
        
        <div class="col-md-10">
          <h5>{{ x.titulo }}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia eaque deleniti earum iste sunt repellendus tenetur odit nemo minus minima ex pariatur, repellat, illum delectus recusandae a. </p>
          <p>{{ x.texto }}</p>
          <p>{{ x.precio }}</p>
        </div>
  
        <div class="col-md-2">
          <img class="img-thumbnail artImg" :src="x.img" alt="imagen del producto">
        </div>
  

    </section>

  </article>

</template>

<style scoped>
.cartSect{
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.artImg{
  max-height: 10rem;
  max-width: 10rem;
}
h5,p{
  color: black;
}
</style>