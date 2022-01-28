import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "../reducer";


const Store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof Store.getState>

export default Store;