<script setup>
const route = useRoute();
const {data: product} = await useFetch(`https://backend-grocery-api.herokuapp.com/food-items/${route.params.id}`);

definePageMeta({
    middleware: "auth",
});
</script>

<template>
<div class="flex justify-center w-1/2 mx-auto">
    <Head>
        <Title>{{product.name}}</Title>
        <Meta name="description" content="product.description" />
    </Head>
    <div class="flex flex-col h-full mt-20 md:flex-row">
        <img :src="product.image" width="200" height="200" :alt="product.name" class="object-cover mb-5 border shadow-md h-80" loading="lazy">
        <div class="flex flex-col justify-center md:ml-10">
            <h2 class="mb-5 text-5xl font-bold">{{product.name}}</h2>
            <div>
                <p>{{product.description}}</p>
                <br>
                <p> {{product.vegetarian ? "Produkten är vegetarisk" : ""}} </p>
                <br>
                <p> {{product.allergies ? "Innehåller följande allergener:" : ""}}</p>
                <ul>
                    <li v-for="allergy in product.allergies" :key="allergy">{{allergy}}</li>
                </ul>
           </div>
        </div>
    </div>
</div>
</template>