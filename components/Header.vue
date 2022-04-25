<script setup>
const { cart } = useCart();

const cartCount = computed(() => cart.value.reduce((total, cartProduct) => total += cartProduct.quantity, 0));

</script>

<template>
    <header>
        <div class="flex items-center justify-between h-20 px-20 text-white bg-orange-300">
            <NuxtLink to="/">
            <span>Byt ut till emoji</span>
            </NuxtLink>
            <h1>Min egen affär</h1>
            <NuxtLink to="/cart">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg> 
                    <span class="ml-3">{{ cartCount }}</span>
                </div>
            </NuxtLink>
        </div>
    </header>
</template>