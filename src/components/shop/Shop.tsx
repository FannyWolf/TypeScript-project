import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import styles from './shop.module.css';
import Loader from '../loader/Loader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getProducts } from '../../features/products/productsAction';
import { useAppDispatch, useAppSelector } from '../redax/hooks';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const validationSchema = Yup.object().shape({
  limit: Yup.number()
  .required('Please enter a number')
  .min(1, 'Minimum value is 1')
  .max(20, 'Maximum value is 20')
  .integer('Must be an integer')
});

export default function Shop() {
  const [limit, setLimit] = useState<number>(5); // Default limit
  
 console.log('render')
  const dispatch = useAppDispatch()

  const {products, isLoading, error} = useAppSelector(state => state.products) 


  const formik = useFormik({
    initialValues: {
      limit: 5
    },
    validationSchema,
    onSubmit: (values) => {
      setLimit(values.limit);
    }
  });



  useEffect(() => {
    // здесь мы отправляем запрос
    // мы вызываем action только внутри dispatch
    dispatch(getProducts())
  }, [dispatch]); 


  return (
    <div className={styles.shop}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="number"
          name="limit"
          value={formik.values.limit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Number of products"
        />
        {formik.touched.limit && formik.errors.limit ? (
          <div className={styles.error}>{formik.errors.limit}</div>
        ) : null}
        <button type="submit">Update</button>
      </form>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}


