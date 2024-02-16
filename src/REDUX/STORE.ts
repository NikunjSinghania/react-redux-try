import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./REDUCERS/productReducer";


const store = configureStore({
    reducer: ProductReducer
  })

  export default store  