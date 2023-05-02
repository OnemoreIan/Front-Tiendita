<script setup>
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
];
const imgurl = [
    "https://thumbsnap.com/s/4oa4SM4H.jpg?0405",
    "https://thumbsnap.com/s/8GbcjyLb.jpg?0405",
    "https://thumbsnap.com/s/wgAgLrTf.jpg?0405",
    "https://thumbsnap.com/s/KLLoVLwC.jpg?0405",
    "https://thumbsnap.com/s/aWA5HJph.jpg?0428",
    "https://us.rule34.xxx//samples/6838/sample_f6bcbee7fccefafc756218fe0474597d.jpg?7804077",
    "https://us.rule34.xxx//samples/6826/sample_e818256412dd211eeefb21ef6942f9cd.jpg?7790896",
    "https://us.rule34.xxx//images/6710/6b59a3e026daa42ae0f4e979023db0f3.png?7659030"
];
</script>

<template>
    <article class=" contain-fluid main">
        <section class=" my-5 ">
            <div class=" row justify-content-center gap-5 ">
                <div class="col-md-5 text-center " v-for="x in enlistado" :key="x">

                    <img  :src="x" alt="" class=" img-fluid" />
                </div>

            </div>
        </section>

        <section class="row my-2 justify-content-evenly align-items-center" v-show="false">
            <img v-for="x in imgurl" :key="x" :src="x" alt="" class="tamaño" />
        </section>
    </article>
</template>

<style scoped>
.tamaño {
    height: 10rem;
    width: 10rem;
}
</style>
