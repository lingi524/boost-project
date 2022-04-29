<script setup>
const emit = defineEmits(["update-products"]);

const formData = ref({});

const { $listify } = useNuxtApp();

const submitHandler = async() => {
    const {name, description, image, vegetarian, allergies} = formData.value;
  
  let allergyList;
    if (allergies) {
        allergyList = $listify(allergies) ;
    }

    const productData = {
        id: `${Math.floor(Math.random()* 10000) + 1000}`,
        name,
        description,
        image,
        vegetarian: vegetarian ?? false,
        allergies: allergyList ?? [],
    };
    
    try {
    await useFetch("https://backend-grocery-api.herokuapp.com/food-items/", {method: "post", body: productData});
    emit("update-products");
    formData.value = {};
    } catch (error) {
        console.log('ERROR');
    }
}
</script>

<template>
    <div class="w-1/3 mt-20 mb-20 ml-10">
        <form @submit.prevent="submitHandler">
            <div>
                <label for="name">Produktnamn</label>
                <input v-model="formData.name" id="name" type="text" placeholder="Coca Cola" required class="block mb-5 text-gray-700 border"/>
               
                <label for="description">Namn</label>
                <input v-model="formData.description" id="description" type="text" placeholder="En god dricka" required class="block mb-5 text-gray-700 border"/>
               
                <label for="imageURL">Bild-URL</label>
                <input v-model="formData.image" id="imageURL" type="text" placeholder="Extern URL" required class="block mb-5 text-gray-700 border"/>

                <label for="vegetarian">Är produkten vegetarisk?</label>
                <input v-model="formData.vegetarian" type="checkbox" id="vegetarian" class="block mb-5 text-gray-700 border"/>

                <label for="allergies">Övriga allergener i kommaseparerad lsita</label>
                <input v-model="formData.allergies" type="input" id="allergies" placeholder="Ange allergenerna" required class="block mb-5 text-gray-700 border"/>
            </div>
            <Button type="submit">Lägg till</Button>
        </form>
    </div>
</template>