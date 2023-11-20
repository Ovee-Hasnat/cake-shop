const { createSlice } = require("@reduxjs/toolkit");

const orderSlice = createSlice({
  name: "order",
  initialState: {
    placing: false,
    success: false,
    Error: false,
  },

  reducers: {
    orderStart: (state) => {
      state.placing = true;
    },
    orderSuccess: (state) => {
      state.placing = false;
      state.success = true;
    },
    orderFailure: (state) => {
      state.Error = true;
    },
  },
});

export const { orderStart, orderSuccess, orderFailure } = orderSlice.actions;
export default orderSlice.reducer;
