import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './myForm.css'

interface IMyFormProps{}

const MyForm: React.FC<IMyFormProps> = () => {

   return (
    <form className='myForm'>
      <MyInput label={'Это точно вы? Подтвердите логин:'} placeholder={'login'} type={'text'} name={'login'} />
      <MyInput label={'Действительная почта:'} placeholder={'email'} type={'email'} name={'email'}  />
      <MyInput label={'Ваш пароль:'} placeholder={'password'} type={'password'} name={'password'} />
      <MyButton name={'Отправить форму'} type={'submit'}  />
    </form>
  );
}

export default MyForm;