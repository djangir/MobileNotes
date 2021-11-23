import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const data = {
    value: [],
}

const slice = createSlice({
    name: 'ListData',
    data,
    reducers: {
        addItem(state, action) {
            state.value.unshift(action.payload)
        },
        RemoveItem(state, action) {
            state.value.splice(action.payload, 1)
        },
        deleteItems(state) {
            state.value = []
        }
    }
})

export const { addItem, RemoveItem, deleteItems } = slice.actions
export default slice.reducer