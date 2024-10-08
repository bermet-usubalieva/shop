import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { shopeAPI } from "../../API"
import { FullProduct, Product } from "../modules"


type ShopeState = {
    shop: Product[],
    loading: boolean,
    detail: null | FullProduct,
    page: number,
    totalPages: number,
}

const initialState: ShopeState = {
    shop: [],
    loading: false,
    detail: null,
    page: 1,
    totalPages: 8,
}

export const getAllListProducts = createAsyncThunk<Product[], number, { rejectValue: string }>(
    'shope/getAllListProducts',
    async (page, { rejectWithValue }) => {
        const res = await shopeAPI.getByPage(page)
        if (res.status !== 200) {
            return rejectWithValue('Server Error')
        }

        return res.data.products
    }
)


export const getProductById = createAsyncThunk<FullProduct, string, { rejectValue: string }>(
    'shope/getProductById',
    async (id, { rejectWithValue }) => {
        try {
            const res = await shopeAPI.getById(id)

            if (res.status !== 200) {
                return rejectWithValue('Server Error');
            }

            return res.data.product
        } catch (error: any) {
            return rejectWithValue('Failed to fetch categories');
        }
    }
)

export const getProductByCateg = createAsyncThunk<Product[], string, { rejectValue: string }>(
    'shope/getProductByCateg',
    async (cat, { rejectWithValue }) => {
        try {
            const res = await shopeAPI.getProductByCategory(cat)


            return res.data.products
        } catch (error: any) {
            return rejectWithValue('Failed to fetch categories')
        }
    }
)


export const getProductBySort = createAsyncThunk<Product[], { category: string; pop: string }, { rejectValue: string }>(
    'shope/getProductBySort',
    async ({ category, pop }, { rejectWithValue }) => {
        try {
            const res = await shopeAPI.getSort(category, pop);

            if (res.status !== 200) {
                return rejectWithValue('Server Error');
            }
            return res.data.products;
        } catch (error: any) {
            return rejectWithValue('Server Error');
        }
    }
);

const shopeSlice = createSlice({
    name: 'shope',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(getAllListProducts.pending, (state) => {
            state.loading = true
        })
        addCase(getAllListProducts.fulfilled, (state, action) => {
            state.loading = false
            state.shop = action.payload
        })
        ///////////////////////////////////////
        addCase(getProductById.pending, (state) => {
            state.loading = true
        })
        addCase(getProductById.fulfilled, (state, action) => {
            state.loading = false
            state.detail = action.payload
        })
        /////////////////////////////////////////
        addCase(getProductByCateg.pending, (state) => {
            state.loading = true
        })
        addCase(getProductByCateg.fulfilled, (state, action) => {
            state.loading = false;
            state.shop = action.payload;
        })
        addCase(getProductByCateg.rejected, (state, action) => {
            state.loading = false;
        })
        /////////////////////////////////////////
        addCase(getProductBySort.pending, (state) => {
            state.loading = true;
        })
        addCase(getProductBySort.fulfilled, (state, action) => {
            state.loading = false;
            state.shop = action.payload;
        })
        addCase(getProductBySort.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const { setPage } = shopeSlice.actions;
export default shopeSlice.reducer