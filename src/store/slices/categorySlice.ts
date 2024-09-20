
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { shopeAPI } from '../../API';


type CategoryState = {
    categories: string[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};

export const getAllCategories = createAsyncThunk<string[], void, { rejectValue: string }>(
    'category/getAllCategories',
    async (_, { rejectWithValue }) => {
        try {
            const res = await shopeAPI.getByCategory();

            if (!res.data) {
                return rejectWithValue('No data found');
            }

            return res.data.categories;
        } catch (error: any) {
            return rejectWithValue('Failed to fetch categories');
        }
    }
);



const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(getAllCategories.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to load categories';
        });
        /////////////////////////////

    },
});

export default categorySlice.reducer;
