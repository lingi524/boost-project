<script setup>
const {data: products, refresh} = await useFetch("/api/products");

useHead({
    title: "Min egen affär",
    meta: [{name: "description", content: "En beskrivning av min affär"}],
});

</script>

<template>
    <main>
        <h1 class="text-6xl font-bold">Välkommen till min affär!</h1>
        <div class="flex flex-wrap mt-10">
            <Card v-for="(product, index) in products" :product="product" :key="index" @deleteProduct="refresh"/>
        </div>
        <Form @update-products="refresh" />
    </main>
</template>