import styles from './Accordion.module.css';
import { questions } from './api';
import { useState } from 'react';
import MyAccordion from './MyAccordion';

const Accordion = () => {
  const [data, setData] = useState(questions);

  const firstSectionData = data.slice(0, 3);
  const secondSectionData = data.slice(3);

  return (
    <div>
      <section className={styles.main}> 
        <div className={styles.section}> {/* first section */}
          {firstSectionData.map((curElement) => {
            const { id } = curElement;
            return <MyAccordion key={id} {...curElement} />;
          })}
        </div>

        <div className={styles.section}>  {/* second section */}
          {secondSectionData.map((curElement) => {
            const { id } = curElement;
            return <MyAccordion key={id} {...curElement} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Accordion;

