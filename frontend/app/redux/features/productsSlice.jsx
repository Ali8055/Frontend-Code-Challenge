import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewItemsAPI, getAllItemsAPI } from "@/app/utils/api/api";

export const addProduct = createAsyncThunk("items/addProduct", async (form) => {
  try {
    const response = await addNewItemsAPI(form);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getProducts = createAsyncThunk("items/getProducts", async () => {
  try {
    const response = await getAllItemsAPI();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const productsSlice = createSlice({
  name: "items",
  initialState: {
    name: "Product Name",
    price: 0,
    status: "null",
    numberOfCartItems: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload, "action.payload---");
        state.value = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.response?.data.msg;
      })
      .addCase(getProducts.pending, (state) => {
        console.log(" getProducts first");
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log(" getProducts Second");
        state.status = "idle";
        console.log(action.payload, "action.payload---");
        state.value = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(" getProducts Third");
        state.status = "failed";
        state.error = action.payload?.response?.data.msg;
      });
  },
});

export default productsSlice.reducer;
