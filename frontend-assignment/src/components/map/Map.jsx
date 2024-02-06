import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.mapCont}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d131589.91893953603!2d27.90142094291153!3d43.21465139940493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1707204260844!5m2!1sen!2sbg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
