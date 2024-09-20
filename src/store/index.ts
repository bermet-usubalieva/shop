import { configureStore } from "@reduxjs/toolkit";
import shopeSlice from "./slices/shopeSlices";
import categorySlice from "./slices/categorySlice";


const store = configureStore({
    reducer: {
        shop: shopeSlice,
        category: categorySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store