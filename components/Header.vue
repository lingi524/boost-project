<script setup>
const { cart } = useCart();
</script>

<template>
    <header>
        <div class="flex items-center justify-between h-20 px-20 text-white bg-orange-300">
            <NuxtLink to="/">
            <span>LOGO</span>
            </NuxtLink>
            <h1>Header</h1>
            <span>Artiklar: {{cart.length}}</span>
        </div>
    </header>
</template>