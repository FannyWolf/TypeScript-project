import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import styles from './Lesson10.module.css'; 
import MyButton from '../../components/myButton/MyButton';

const Lesson10: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFacts(prevFacts => [...prevFacts, data.fact]);
        setLoading(false); 
      })
    
  };

  const deleteAllData = () => {
    setFacts([]);
  };

  return (
    <div style={{ padding: '20px' }}>

      <MyButton onClick={fetchData} name="GET MORE INFO" />
      {facts.length > 0 && (
        <MyButton onClick={deleteAllData} name="DELETE ALL DATA" />
      )}

      {loading && <Spinner />}
      {facts.length > 0 && (
        <div className={styles.factBlock}>
          {facts.map((fact, index) => (
            <p key={index} className={styles.factItem}>{fact}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lesson10;
