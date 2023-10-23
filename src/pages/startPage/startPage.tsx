import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input} from '../../ui-kit/input/input';
import styles from './styles.module.css';
import {Button} from '../../ui-kit/button/button';

const StartPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleClick = () => {
    navigate('/test');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Тест</h2>
      <p className={styles.subtitle}>Словарный запас</p>
      <div className={styles.name}>
        <h3>Введите ваше имя</h3>
        <Input title='name' value={name} onChange={handleChange} />
        <Button htmlType='button' size='small' onClick={handleClick}>
          Начать
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
