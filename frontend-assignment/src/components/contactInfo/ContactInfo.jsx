import styles from './ContactInfo.module.css';

const Contact = () => {
  return (
    <div className={styles.contactCont}>
      <header className={styles.headingCont}>
        <h2>Contact</h2>
        <p>Tell us about your project and let’s create something together.</p>
      </header>
      <section className={styles.infoCont}>
        <div className={styles.box}>
          <p>Email:</p>
          <p>Phone:</p>
        </div>
        <div className={styles.box}>
          <p>contact@business.com</p>
          <p>555-555-555</p>
        </div>
      </section>
      <div className={styles.line}></div>
      <section className={styles.hourBox}>
        <h3>Working Hours</h3>
        <p>MON-FRI: 9:00 AM - 6:00 PM</p>
      </section>
    </div>
  );
};

export default Contact;
