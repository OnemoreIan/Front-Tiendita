<script setup>
import LeftArrow from '../components/icons/LeftArrow.vue';
import RightArrow from '../components/icons/RightArrow.vue';
import { computed, ref } from 'vue';


const tendencia = [
  "https://m.media-amazon.com/images/I/41tgr51p71L._AC_SY230_.jpg",
  "https://m.media-amazon.com/images/I/71NKRXSR3XL._AC_UL400_.jpg",
  "https://m.media-amazon.com/images/I/61xmW6Tx6wL._AC_SL1300_.jpg",
  "https://m.media-amazon.com/images/I/71tHDHRZNvL._AC_UL400_.jpg",
  "https://m.media-amazon.com/images/I/51yU96zxg8L._AC_UY218_.jpg",
  "https://m.media-amazon.com/images/I/31O2F5LVkEL._AC_SY164_.jpg",
];

const novedades = [
  "https://m.media-amazon.com/images/I/51a80Psa9UL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/41+JmXFvcUL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/61LzfCUtaZL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/71tPPmS9xXL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/81uCx7v+gSL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/81dcdwqGXEL._AC_UL320_.jpg"
];

/* const srrc = document.querySelectorAll('img');
const elementos = []
for (let i = 0; i < srrc.length; i++) {
  elementos.push(srrc[i].src)
};
console.log(elementos); */
const idVend = ref(0);
const idNove = ref(0);
function aumentar(id) {
  id.value++;
  if (id.value > 5) {
    id.value = 0;
  }
}

const dezplazarTend = computed(() => {
  setTimeout(() => {
    aumentar(idVend)
  },3500)
  return tendencia[idVend.value];
})
const dezplazarNove = computed(() => {
  setTimeout(() => {
    aumentar(idNove);
  }, 3500)
  return novedades[idNove.value]
})
</script>

<template>
  <section class="contain-fluid my-4 overflow-hidden">
    <h1 class="text-center">Tiendita</h1>

    <div class="row d-flex justify-content-evenly">

      <div class="col-md-3  espacio ">
        <h5 class="h2">Mas vendido</h5>
        <!-- <img v-for="x in dirImg" :src="x" alt="" class="destacado img-thumbnail" /> -->
        <img :src="dezplazarTend" alt="" class="destacado img-thumbnail" />
      </div>

      <div class="col-md-3 py-5 espacio ">
        <h5 class="h2">Novedades</h5>
        <!-- <img v-for="x in dirImg" :src="x" alt="" class="destacado img-thumbnail" /> -->
        <img :src="dezplazarNove" alt="" class="destacado img-thumbnail" />
      </div>

    </div>
    
  </section>
</template>

<style scoped>
.control {
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-rows: repeat(2, minmax(10rem, 1fr));
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
}

.top {
  width: 8rem;
  height: 8rem;
  cursor: pointer;
}

.espacio {
  /* background: linear-gradient(235deg, rgb(109, 218, 0), rgb(230, 152, 71)); */
  background: linear-gradient(rgb(105, 192, 204), rgb(72, 201, 224));
  border-radius: 2rem;
  display: flex;
  flex-flow: column;
  /* grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr)); */
  /* grid-template-rows: repeat(2, minmax(3rem, auto)); */
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.destacado {
  object-fit: contain;
  height: 200px;
  width: 200px;
}

.carrusel {
  padding: 0 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.circle {
  height: 1.5rem;
  width: 1.5rem;
  background-color: rgb(72, 201, 224);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width:750px) {
  .espacio {
    background: none;
  }
}
</style>
