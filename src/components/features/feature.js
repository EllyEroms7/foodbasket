
import Contact from './contact/contact';
import Design from './design';
import Health from './health';
import Quality from './quality';
import styles from './styles/feature.module.scss';
import Taste from './taste';

export default function Feature() {
  return (
    <div id="feature" className={styles.features}>
      <div className="">
        <Design />
        <Quality />
        <Taste />
        <Health />
        <Contact />
      </div>
    </div>
  )
}
