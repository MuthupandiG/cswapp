import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./slicer.js";

export default configureStore({
  reducer: {
    cswapp: appReducer,
  },
})