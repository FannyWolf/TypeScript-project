import { useEffect, useState } from 'react';
import MyButton from '../../components/myButton/MyButton';




function Lesson09() {
  // код с этой строчки и до return будет срабатывать при каждом обновлении компонента

  interface IDogData {
    message: string;
    status: string;
  }

  const [count, setCount] = useState(0);

  const [dog, setDog] = useState<IDogData>({
    message: '',
    status: ''
  });

  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDog(data));
  };


  // в массиве зависимостей мы указываем переменные с данными
  // от изменения которых будет зависит выполнится действие внутри useEffect или нет

  useEffect(() => {
    fetchDog();
  }, []);


  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className='lesson-container'>
      <h3>Lesson 09</h3>
      <h4>UseEffect hook 🪝</h4>
      <h5>Проблема которую решает этот hook</h5>
      <p>UseEffect это функция, которая принимает в себя два параметра:</p>
      <p>{count}</p>
      <MyButton name={'plus'} onClick={handlePlus} />
      <img width={120} src={dog.message} alt="" />
      <ol>
        <li>cтрелочную функцию с действиями, которые вы хотите запускать при определенных условиях </li>
        <li>массив зависимостей. В нем через запятую можно указать от изменения каких переменных будет зависеть запуск действий. Если массив пустой - код сработает только при монтировании (mounting) компонента</li>
      </ol>
      <p>Мы будем использовать хук useEffect() для получения данных из асинхронных запросов с пустым массивом зависимостей</p>
      <p>Любой изменение стейта вызывает ререндр компонента. Это значит, что все операции в теле компонента будут повторяться раз за разом. В том числе и те, которые мы бы не хотели повторять. </p>
      <p>
        Нужен способ чтобы мы могли изолировать операции от повтора там, где нам это не нужно.
      </p>
      <h5>Вспоминаем fetch запросы:</h5>
      <ul>
        <li>Асинхронный запрос на сервер за данными</li>
        <li>Данные приходят не сразу, их нужно подождать</li>
        <li>В ответ нам приходит объект Promise в состоянии Pending(обработка)</li>
        <li>Это данные, которых нужно дождаться и обработать особым способом</li>
        <li>Первый способ это цепочка из .then() методов</li>
        <li>Второй асинхронная функция с синтаксисом async / await</li>
        <li>В ответ мы хотим получить данные с сервера</li>
        <li>Чаще всего он будут в формате JSON</li>
        <li>Данные с сервера приходится обрабатывать два раза</li>
        <li>Сначала мы дожидаемся самих данных</li>
        <li>Потом дожидаемся выполнения асинхронного метода .json()</li>
      </ul>
    </div>
  );
}

export default Lesson09;
