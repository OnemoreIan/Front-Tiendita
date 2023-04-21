<script setup>
const dirImg = ['https://m.media-amazon.com/images/I/41tgr51p71L._AC_SY230_.jpg','https://m.media-amazon.com/images/I/71NKRXSR3XL._AC_UL400_.jpg',
'https://m.media-amazon.com/images/I/61xmW6Tx6wL._AC_SL1300_.jpg','https://m.media-amazon.com/images/I/71tHDHRZNvL._AC_UL400_.jpg',
'https://m.media-amazon.com/images/I/51yU96zxg8L._AC_UY218_.jpg','https://m.media-amazon.com/images/I/31O2F5LVkEL._AC_SY164_.jpg']
/* const srrc = document.querySelectorAll('img');
const elementos = []
for (let i = 0; i < srrc.length; i++) {
  elementos.push(srrc[i].src)
};
console.log(elementos); */
</script>

<template>
  <section class="contain-fluid  my-4 overflow-hidden">

    <div class="col-lg-10 py-5 espacio mx-auto">
      <img v-for="x in dirImg" :src="x" alt="" class="destacado img-thumbnail">
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
  background: linear-gradient(235deg, rgb(109, 218, 0), rgb(230, 152, 71));
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(6rem, auto));
  grid-template-rows: repeat(2, minmax(3rem, auto));
  gap: 1rem;
  row-gap: 2rem;
  justify-items: center;
  align-items: center;
}
.destacado{
  object-fit: contain;
  height: 200px;
  width: 200px;
}
</style>
