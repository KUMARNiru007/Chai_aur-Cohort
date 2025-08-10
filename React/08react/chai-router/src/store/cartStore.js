import {create} from "zustand"

export const useCartStore = create((set) => ({
    cart: [], //target

    addToCart : (item) => 
        set((state) => ({
            cart: [...state.cart, item]
        })),

    removeFromCart : (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !==id)
    })),
    
    clearCart: () => set({
        cart :[]
    })
    // no callback needed 

    
    

})) //implicite return