import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../components/shop/Shop';
import { getProducts } from './productsAction';


interface IProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

// описываем исходное состояние
const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: '',
};

// * в REDUX мы работаем с 3-мя осн. сущностями: 
// 1. Store - хранилище данных
// 2. Slice - описание логики изменения данных
// 3. Actions - действия с данными (синхронные и асинхронные)

// срез определенных данных, сгруппированных по выбранной теме (например, product, user,etc) 
// здесь мы описываем логику работ с данными из синхронных и асинхронных действий по данной теме
// этот срез создается с пом. функции createSlice

export const productSlice = createSlice({
    // уникальное имя slice
  name: 'productSlice',

  // передаем начальное значение
  initialState,

  // логика синхронных  действий
  reducers: {
    cleanProducts: (state) => {
      state.products = []
  }},

  // логика ассинхронных  действий
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
  }
});

export default productSlice;
export const { cleanProducts} = productSlice.actions