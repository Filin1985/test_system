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
      <h2 className={styles.title}>Test</h2>
      <p className={styles.subtitle}>Lexicon</p>
      <div className={styles.name}>
        <h3>Enter your name</h3>
        <Input title='name' value={name} onChange={handleChange} />
        <Button htmlType='button' size='small' onClick={handleClick}>
          Begin
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
