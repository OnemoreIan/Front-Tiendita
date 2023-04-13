<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

  <article class="cartSect" v-for="x in 10">

    <div>
      <h5>Nombre del articulo</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis assumenda mollitia eaque deleniti earum iste sunt repellendus tenetur odit nemo minus minima ex pariatur, repellat, illum delectus recusandae a. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis laudantium porro id vitae ipsa quo aliquam. Facere aperiam saepe repudiandae quia, quisquam animi neque expedita porro dolorem, blanditiis modi! </p>
      <p>Informacin del producto</p>
    </div>

    <img class="artImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felektra.vteximg.com.br%2Farquivos%2Fids%2F336912-1000-1000%2F10000451.jpg%3Fv%3D636401238711200000&f=1&nofb=1&ipt=5bf03d15a5e5706ac6945ca71eb96d386119722376172cca167aba861b3c47ee&ipo=images" alt="imagen del producto">

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
.cartSect div{
  padding-left: 1rem;
}
.artImg{
  height: 10rem;
  width: 10rem;
  border-radius: 3rem;
  box-shadow: 1px 1px 10px rgb(119, 119, 119);
}

</style>