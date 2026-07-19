import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const food = action.payload;
      const exists = state.favoriterecipes.some(
        (item) => item.idFood === food.idFood
      );
      if (exists) {
        state.favoriterecipes = state.favoriterecipes.filter(
          (item) => item.idFood !== food.idFood
        );
      } else {
        state.favoriterecipes.push(food);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
