import { createSlice } from '@reduxjs/toolkit'

export const clothesSlice = createSlice({
    name: 'allClothes',
    initialState: {
        selectedCategory: "SKIRT"
    },
    reducers: {
        filteredCategory : (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
  })
  export const getSelectedCategory = state => state.allClothes.selectedCategory;
  export const {filteredCategory} = clothesSlice.actions;
  export default clothesSlice.reducer