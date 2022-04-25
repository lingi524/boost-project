interface Product {
    id:number;
    name:string;
    description:string;
    image:string;
    vegetarian: boolean;
    allergies: string[];
}

interface CartProduct extends Product {
    quantity: number;
}


export const useCart = () => {
    const cart = useState<CartProduct[]>("", () => []);

    const addToCart = (product) => {
        const currentProduct = cart.value.find((p) => p.id === product.id);
       
        if (currentProduct) {
            currentProduct.quantity += 1;

        } else {
            const cartProduct: CartProduct = {...product, quantity: 1};
            cart.value.push(cartProduct);
        }
    }

    return {
        cart: readonly(cart),
        addToCart,
    };
}