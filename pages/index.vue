<script setup>
import Toggle from '@vueform/toggle';
const {data: products, refresh} = await useFetch("/api/products");

useHead({
    title: "Min egen affär",
    meta: [{name: "description", content: "En beskrivning av min affär"}],
});

definePageMeta({
    middleware: "logger",
});

const filter = ref({});

const productsToShow = computed(() => {
    console.log(filter.value);
    return products.value.filter(p => p.vegetarian === filter.value.vegetarian)
});

const allAllergies = products.value
.map((p) => p.allergies)
.filter((p) => p)
.flat();

const allergies = [...new Set(allAllergies)];

</script>

<template>
    <main>
        <div class="flex flex-col items-center justify-center">
            <h1 class="my-10 text-6xl font-bold">Välkommen till min affär!</h1>
            <div class="flex flex-row gap-5">
                <div v-for="allergy in allergies" :key="allergy"  class="flex flex-row">
                    <p class="mr-4">{{allergy}}:</p>
                    <Toggle v-model="filter[allergy.toLowerCase()]"/>
                </div>
                <span class="inline">
                Vegetariskt: <Toggle v-model="filter.vegetarian" class="pl-3"/>
                </span>
            </div>
        </div>
        <div class="flex flex-wrap mx-auto mt-10">
            <Card v-for="(product, index) in productsToShow" :product="product" :key="index" @deleteProduct="refresh"/>
        </div>

        <Form @update-products="refresh" />
    </main>
</template>

<style src="@vueform/toggle/themes/default.css"></style>
