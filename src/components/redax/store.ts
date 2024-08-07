import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productSlice from "../../features/products/productSlice"
import authSlice from "../../features/auth/authSlice"


export const store = configureStore({
  reducer: {
    // подключаем slice к store
   products: productSlice.reducer,
   user: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>