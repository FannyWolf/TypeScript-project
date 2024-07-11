import Counter from "../../components/counter/Counter";
import Feedback from "../../components/feedback/Feedback";
import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";
import MyForm from "../../components/myForm/MyForm";

function Lesson07(){
    // типизация примитивный тип данных

  let hero: string = 'batman';

  console.log(hero);

  // типизация объекта

  interface ISuperhero {
    id: number;
    name: string;
    nickname: string;

    // age может быть и строкой и числом
    // такое объединение называется union type

    age?: number | string;
    abilities?: string[];
  }

  // наследование типов в ts

  interface ISpaceHeroes extends ISuperhero {
    homePlanet: string;
  }

   // создание объекта с типом

  let hero1: ISpaceHeroes = {
    id: 1,
    name: 'Clark Kent',
    nickname: 'Superman',
    abilities: ['super vision', 'can fly'],
    homePlanet: 'Crypton'
  };

  // другой экземпляр объекта с нашим типом

  let hero2: ISuperhero = {
    id: 2,
    name: 'Bruce Wane',
    nickname: 'Batman',
    // этот ключ можно было бы и не указать
    // потому что у ISuperhero ‘abilities’ - не обязательный ключ
    abilities: []
  };

  // массив из объектов с нашим типом

  const heroes: ISuperhero[] = [hero1, hero2];

  console.log(heroes);

   return (
    <div className='lesson-container'>
      <h4>Lesson 07</h4>
      <p>Урок 'TypeScript часть 2' в комментариях к коду урока ✨ </p>
      <div>
        {heroes.map(el => (
          <div key={el.id}>
            <h4> 🦸‍♂️: {el.nickname}</h4>
            <p>Real name: {el.name}</p>
          </div>
        ))}
      </div>
      <div>
        <MyButton name='click' onClick={() => console.log('click')}/>
        <MyButton name='reset'/>
        <MyButton name='submit'/>
      </div>
      
        <Counter />
        <Feedback />
        <MyInput label="Ваш логин:" name="login" type="text" placeholder="login"  />
        <MyForm />  
      
    </div>
  );
}

export default Lesson07;