<script setup>
import Toggle from '@vueform/toggle'
const {data: products, refresh} = await useFetch("/api/products");

console.log("GitHub test");

useHead({
    title: "Min egen affär",
    meta: [{name: "description", content: "En beskrivning av min affär"}],
});

definePageMeta({
    middleware: "logger",
});

const filter = ref({});

const productsToShow = computed(() => {
    return products.value.filter(p => p.vegetarian === filter.value.vegetarian)
});

</script>

<template>
    <main>
        <div class="flex flex-col items-center justify-center">
            <h1 class="my-10 text-6xl font-bold">Välkommen till min affär!</h1>
            <span class="flex flex-row bg-yellow-50">
            <p>Vegetariskt:</p>
            <Toggle v-model="filter.vegetarian" class="pl-3"/>
            </span>
        </div>
        <div class="flex flex-wrap mx-auto mt-10">
            <Card v-for="(product, index) in productsToShow" :product="product" :key="index" @deleteProduct="refresh"/>
        </div>
        <Form @update-products="refresh" />
    </main>
</template>

<style src="@vueform/toggle/themes/default.css"></style>
