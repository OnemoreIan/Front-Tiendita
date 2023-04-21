<script setup >
const allImg = [
    "data:image/jpeg;base64,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",
    "https://m.media-amazon.com/images/I/41tgr51p71L._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/51cFE2MgFrL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/31O2F5LVkEL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41MEwy6e-dL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41zd7LLUA7L._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/31z5T5T5GXL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/813zSXRIxRL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41QsqTdFZPL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/51p8UlTqNkL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/516WOSOYXAL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/417CNQpnMAL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41diiVypbtL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/31n+KKXMRML._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41jE-Jz1TAL._AC_SY164_.jpg",
    "https://m.media-amazon.com/images/I/41W-bQK0GwL._AC_SY164_.jpg"
];

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
    
    <img class="img-thumbnail" v-for="x in enlistado" :src="x" alt="">

</template>

<style scoped>

</style>