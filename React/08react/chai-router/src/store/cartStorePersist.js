import {create} from "zustand"
import {persist} from 'zustand/middleware'

export const useCartStore = create(persist((set) => ({
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

    
    

}))) 

// using persist it will store in Local Storage also 