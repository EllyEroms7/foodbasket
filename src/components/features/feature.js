
import Contact from './contact/contact';
import Design from './design';
import Health from './health';
import Quality from './quality';
import styles from './styles/feature.module.scss';
import Taste from './taste';

export default function Feature() {
  const variantsT = { //Title animation
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }

  const variantsBL = { //Body (left aligned) animation
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  }

  const variantsBR = { //Body (right aligned) animation
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  }


  const variantsI = { //Image animation
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <div id="feature" className={styles.features}>
      <div className="">

        <Design variantsBL={variantsBL} variantsBR={variantsBR} variantsI={variantsI} variantsT={variantsT} />

        <Quality variantsBL={variantsBL} variantsBR={variantsBR} variantsI={variantsI} variantsT={variantsT} />
        <Taste variantsBL={variantsBL} variantsBR={variantsBR} variantsI={variantsI} variantsT={variantsT} />
        <Health variantsBL={variantsBL} variantsBR={variantsBR} />
        <Contact variantsBL={variantsBL} variantsBR={variantsBR} variantsI={variantsI} variantsT={variantsT} />
      </div>
    </div>
  )
}
