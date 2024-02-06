import styles from './Hero.module.css';
import { useState, useEffect, useCallback } from 'react';
import pickImage from '../../lib/imagepicker';

const Hero = () => {
  const [bgImage, setBgImage] = useState('');

  const selectRandomImage = useCallback(() => {
    const pickedImg = pickImage();
    setBgImage(pickedImg);
  }, []);

  useEffect(() => {
    selectRandomImage();
  }, [selectRandomImage]);

  return (
    <div style={{ backgroundImage: `linear-gradient(#243A5AB2, #243A5AB2), url(${bgImage})`,}}
      className={'width ' + styles.heroScreenContainer}>
      <section className={'margin ' + styles.heroContent}>
        <header className={styles.heading}>
          <h2>Let’s talk!</h2>
          <p>
            Have a challenge? Want to develop a new source for products or
            services? Or simply want a new perspective from an experienced
            veteran? Drop us a line or give us a call. Put our superior customer
            service and speedy response time to the test. We’re ready to help.
          </p>
          <button className={styles.btn}>
            <span>Call us now</span>
          </button>
        </header>
      </section>
    </div>
  );
};

export default Hero;

// make it so the image is random later
