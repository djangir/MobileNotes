import { createSlice } from '@reduxjs/toolkit'

export const data = {
    value: ['Item', 'Item 1', 'Item 2'],
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
        }
    },
})

export const { addItem , RemoveItem } = slice.actions

export default slice.reducer