import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'; // Импорт Yup для валидации
import styles from '../../../components/robotForm/robotForm.module.css';

interface IFormValues {
  name: string;
}

interface IApiResponse {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Поле имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа'),
});

export default function FormGender() {
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: validationSchema, // Добавить схему валидации
    onSubmit: (values, { resetForm }) => {
      fetch(`https://api.genderize.io/?name=${values.name}`)
        .then((response) => response.json())
        .then((data) => {
          setApiResponse(data);
          setError(null);
        })
        .catch(() => {
          setError('Не удалось получить данные от API');
          setApiResponse(null);
        });
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <div className={styles.inputContainer}>
          <input
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Добавить onBlur для показа ошибок при потере фокуса
            type="text"
            placeholder="Имя"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.errorContainer}>{formik.errors.name}</div>
          ) : null}
        </div>
        <button type="submit">Подтвердить</button>
      </form>
      {apiResponse && (
        <div>
          <p>Имя: {apiResponse.name}</p>
          <p>Пол: {apiResponse.gender}</p>
          <p>Вероятность: {apiResponse.probability}</p>
          <p>Количество: {apiResponse.count}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
