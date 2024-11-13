import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as CartItem[],
  reducers: {
    AddTodo: (state, action: PayloadAction<CartItem>) => {
      // return state.push(action.payload);
      console.log(...state);
    },
    RemoveTodo: (state, action: PayloadAction) => {
      console.log("remove");
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, RemoveTodo } = counterSlice.actions;
export default counterSlice.reducer;
