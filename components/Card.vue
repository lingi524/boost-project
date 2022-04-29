<script setup>

const emit = defineEmits(["deleteProduct"]);


const props = defineProps({
    product: Object
});

const { addToCart } = useCart();

function addToList() {
    addToCart(props.product);
}
const handleDelete = async () => {
    await useFetch(`https://backend-grocery-api.herokuapp.com/food-items/${props.product.id}`, {method: "delete"});
    emit("deleteProduct");
}
</script>

<template>
    <div class="p-5 m-2 border rounded-lg shadow-md w-/2 md:w-1/6 align-start">
    <button @click="handleDelete">X</button>
        <NuxtLink :to="`/product/${product.id}`">
            <img :src="product.image" width="300" height="300" :alt="product.name" class="object-cover mb-3 h-52" loading="lazy">
        </NuxtLink>
        <h3 class="mb-3">{{product.name}}</h3>
        <p class="mb-3 text-gray-600">{{product.description}}</p>
        <Button @click="addToList" class="w-full">Lägg till</Button>
    </div>
</template>