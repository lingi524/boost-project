interface Product {
    id:number;
    name:string;
    description:string;
    image:string;
}

export const useCart = () => {
    const cart = useState<Product[]>("", () => []);

    const addToCart = (product: Product) => {
        cart.value.push(product);
    }

    return {
        cart: readonly(cart),
        addToCart
    };
}