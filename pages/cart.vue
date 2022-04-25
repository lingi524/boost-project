<script setup>
const { cart } = useCart();
</script>

<template>
    <div class="min-h-screen">
        <div v-if="!cart.length">
            <p class="text-5xl font-bold">Oops! Din kundvagn är tom!</p>
        </div>
        <div v-else v-for="(product, index) in cart" :product="product" :key="index">
            <div class="flex flex-row">
                <img :src="product.image" width="100" height="100" :alt="product.name" class="object-cover h-10 mb-3" loading="lazy">
                <p>{{product.name}} {{product.quantity}}</p>
            </div>
        </div>
    </div>
</template>