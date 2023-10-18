import { useEffect, useState } from 'react';
import styles from './Fader.module.scss';

export const Fader = () => {
  const [topStyle, setTopStyle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);

    setTimeout(() => {
      setTopStyle('-110vh');
    }, 2300);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <section className={styles.fader} style={{ top: topStyle }}>
        <p>Motion playground</p>
    </section>
  );
};
