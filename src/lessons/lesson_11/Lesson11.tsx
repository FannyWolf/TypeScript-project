import styles from "./lesson11.module.css";
import FormGender from "./genderize/FormGender";


export default function Lesson11() {
    
  return (
    <div className='lesson-container'>
       <h3>Lesson 11 </h3>
       <div className={styles.loader}></div>
       <p>Библиотека для работы с формами Formik</p>
      <FormGender />
    </div>
  );
}
