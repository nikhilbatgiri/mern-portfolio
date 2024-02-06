import styles from "../Skills/Skills.module.scss";
import "react-multi-carousel/lib/styles.css";
import SkillsCarousel from './SkillsCarousel'

const Skills = () => {

  return (
    <div className={styles.skills}>
      <div className={styles.wrapper1}>
        <h1>Skills</h1>
        <h2>Education</h2>
        <p>
          <b>B.E. (Mechanical Engineering)</b>
        </p>
        <p>N. K. Orchid College of Engineering & Technology, Solapur, Maharashtra</p>
        <p>BELOW ARE MY TECHNICAL SKILLS & TOOLS I USE...</p>
      </div>
      <div className={styles.wrapper2}>
        <SkillsCarousel />
      </div>
    </div>
  );
};

export default Skills;
