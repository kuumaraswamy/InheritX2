import { createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
    name: 'items',
    initialState: {items: []},
    reducers: {
        fetchAllData(state, action) {
            state.items = action.payload
        },
        addItem(state, action){
            state.items = [...state.items, action.payload]
        }
    }
})

export const itemsActions = itemsSlice.actions
export default itemsSlice.reducer