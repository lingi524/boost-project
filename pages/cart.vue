<script setup>
const { cart } = useCart();
</script>

<template>
    <div class="min-h-screen p-2">
        <div v-if="!cart.length">
            <p class="text-5xl font-bold">Oops! Din kundvagn är tom!</p>
        </div>
        <div v-else v-for="(product, index) in cart" :product="product" :key="index">
            <div class="flex flex-row justify-center mx-auto mt-10 ">
                <div class="flex flex-col p-5 border rounded-lg shadow-md">
                    <NuxtLink :to="`/product/${product.id}`">
                    <img :src="product.image" width="300" height="300" :alt="product.name" class="object-cover mb-3 h-52" loading="lazy" style="width: 10rem">
                   </NuxtLink>
                    <div>
                        <p class="font-bold">Produkt: {{product.name}}</p>
                        <p>Antal: {{product.quantity}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>