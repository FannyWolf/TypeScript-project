import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




// описание асинхронного запроса 
// такие функции называют action
// на каждый новый запрос мы создаем свой с помощью action redux createAsyncThunk
export const getProducts = createAsyncThunk(

    // первый параметр - строка с уникальным именем для action
  'getProducts',

  // второй параметр - асинхронная функция с запросом
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
