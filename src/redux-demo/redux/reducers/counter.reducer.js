import { createSlice } from "@reduxjs/toolkit";
import { fetchCounter, setCounter } from "../actions/counter.action";
const actionList = [fetchCounter, setCounter];

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: null
  },
  extraReducers: (builder) => {
    actionList.forEach((action)=>{
      builder.addCase(action.fulfilled, (state, action) => {
        state.data = action.payload;
      });
    })
  },
});

export default counterSlice.reducer;