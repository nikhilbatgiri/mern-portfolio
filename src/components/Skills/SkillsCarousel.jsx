import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/skill-1.png';
import img2 from '../assets/skill-2.png';
import img3 from '../assets/skill-3.png';
import img4 from '../assets/skill-4.png';
import img5 from '../assets/skill-5.png';
import img6 from '../assets/skill-6.png';
import img7 from '../assets/skill-7.png';
import img8 from '../assets/skill-8.png';
import img9 from '../assets/skill-9.png';
import img10 from '../assets/skill-10.png';
import img11 from '../assets/skill-11.png';
import img12 from '../assets/skill-12.png';
import img13 from '../assets/skill-13.png';
import styles from './SkillsCarousel.module.scss';

const SkillsCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    return(
      <Carousel responsive={responsive} infinite={true} >
      <div className={styles.item}>
          <img src={img1} alt=""/>
          <h5>HTML5</h5>
      </div>
      <div className={styles.item}>
          <img src={img2} alt=""/>
          <h5>CSS3</h5>
      </div>
      <div className={styles.item}>
          <img src={img3} alt=""/>
          <h5>JavaScript</h5>
      </div>
      <div className={styles.item}>
          <img src={img4} alt=""/>
          <h5>MongoDB</h5>
      </div>
      <div className={styles.item}>
          <img src={img5} alt=""/>
          <h5>ExpressJS</h5>
      </div>
      <div className={styles.item}>
          <img src={img6} alt=""/>
          <h5>ReactJS</h5>
      </div>
      <div className={styles.item}>
          <img src={img7} alt=""/>
          <h5>NodeJS</h5>
      </div>
      <div className={styles.item}>
          <img src={img8} alt=""/>
          <h5>Bootstrap</h5>
      </div>
      <div className={styles.item}>
          <img src={img9} alt=""/>
          <h5>TailwindCSS</h5>
      </div>
      <div className={styles.item}>
          <img src={img10} alt=""/>
          <h5>Material UI</h5>
      </div>
      <div className={styles.item}>
          <img src={img11} alt=""/>
          <h5>Adobe XD</h5>
      </div>
      <div className={styles.item}>
          <img src={img12} alt=""/>
          <h5>Adobe Photoshop</h5>
      </div>
      <div className={styles.item}>
          <img src={img13} alt=""/>
          <h5>Adobe Illustrator</h5>
      </div>
  </Carousel>
    )
}

export default SkillsCarousel;