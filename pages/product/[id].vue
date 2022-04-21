<script setup>
const route = useRoute();
const {data: product} = await useFetch(`/api/product/${route.params.id}`);
</script>

<template>
<div>
    <Head>
        <Title>{{product.name}}</Title>
        <Meta name="description" content="product.description" />
    </Head>
    <div class="h-screen mt-10 ml-10">
        <h2 class="mb-5 text-5xl font-bold">{{product.name}}</h2>
        <img>
        <p>{{product.description}}</p>
    </div>
</div>
</template>