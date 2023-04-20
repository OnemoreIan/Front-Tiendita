<script setup>

</script>

<template>

    <section class="control">

        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-bag-fill top" viewBox="0 0 16 16" v-for="x in 6">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg>

    </section>

</template>

<style scoped>
.control{
    width: 80%;
    margin: 2rem auto;
    display: grid;
    grid-template-rows: repeat(2, minmax(10rem,1fr));
    grid-template-columns: repeat(3, minmax(10rem,1fr));
    gap: 1rem;
    justify-items: center;
    align-items: center;
}
.top{
    width: 8rem;
    height: 8rem;
    cursor: pointer;
}
</style>