import Contact from '../contactInfo/ContactInfo';
import Map from '../map/Map';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={'width ' + styles.sectionScreenCont}>
      <section className={'margin ' + styles.sectionContentCont}>
        <Contact />
        <Map />
      </section>
    </div>
  );
};

export default ContactSection;
