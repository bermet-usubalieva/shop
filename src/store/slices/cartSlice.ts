import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductInCart } from "../modules"
import { setLSCart } from "../../LS"


type CartState = {
    cart: IProductInCart[],
    countInCart: number,
}

const initialState: CartState = {
    cart: [],
    countInCart: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartArr(state, action: PayloadAction<IProductInCart[]>) {
            state.cart = action.payload
            state.countInCart = action.payload.reduce((sumCount, el) => {
                return sumCount += (el.count || 0)
            }, 0)
        },
        plusCount(state, action: PayloadAction<number>) {
            const item = state.cart.find(el => el.id === action.payload)
            if (item) {
                item.count += 1
                setLSCart('cart', state.cart)
                state.countInCart = state.cart.reduce((sumCount, el) => {
                    return sumCount += (el.count || 0)
                }, 0)
            }
        },
        minusCount(state, action: PayloadAction<number>) {
            const item = state.cart.find(el => el.id === action.payload)
            if (item) {
                item.count -= 1
                setLSCart('cart', state.cart)
                state.countInCart = state.cart.reduce((sumCount, el) => {
                    return sumCount += (el.count || 0)
                }, 0)
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            setLSCart('cart', state.cart)
            state.countInCart = state.cart.reduce((sumCount, el) => {
                return sumCount += (el.count || 0)
            }, 0)
        }
    }
})

export const { setCartArr, plusCount, minusCount, removeProduct } = cartSlice.actions
export default cartSlice.reducer