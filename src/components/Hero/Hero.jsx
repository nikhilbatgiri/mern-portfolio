import { Link } from 'react-scroll'
import styles from './Hero.module.scss'
import { motion } from 'framer-motion'
import scroll from '../assets/scroll.png'
import hero from '../assets/hero2.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const textVariants = {
    initial:{x:-500,opacity:0},
    animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:0.1}},
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:1.5,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial:{x:0},
    animate:{x:"-220%",transition:{repeat:Infinity,repeatType:'mirror',duration:20}}
}

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.wrapper}>
                <motion.div className={styles.textContainer} variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>NIKHIL BATGIRI</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.h1 variants={textVariants}><span>[ M E R N ]</span></motion.h1>
                    <motion.h2 variants={textVariants}><span>Ux Ui | Graphics Designer</span></motion.h2>
                    {/* <motion.div variants={textVariants}>
                        <motion.a href='#' className={styles.btn} variants={textVariants} >See the Latest Works</motion.a>
                        <motion.a href='#' className={styles.btn} variants={textVariants} >Contact Me</motion.a>
                    </motion.div> */}
                    <div>
                        <Link to='projects' className={styles.btn}>See my Projects</Link>
                        <Link to='contact' className={styles.btn}>Contact</Link>
                    </div>
                    <motion.div className={styles.social} initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
                        <a href='https://www.linkedin.com/in/nikhil-batgiri' target='blank'>
                            <img className={styles.socialbtn} src={linkedin} alt=''/>
                        </a>
                        <a href='https://github.com/nikhilbatgiri' target='blank'>
                            <img className={styles.socialbtn} src={github} alt=''/>
                        </a>
                    </motion.div>
                    <motion.img variants={textVariants} animate='scrollButton' src={scroll} alt='' />
                </motion.div>
                <div className={styles.imageContainer}>
                    <img src={hero} alt=''></img>
                </div>
            </div>
            <motion.div className={styles.slidingTextContainer} variants={sliderVariants} initial='initial' animate='animate'>
                Web Developer | UX/UI Designer | Graphics Designer
            </motion.div>
        </div>
    )
}

export default Hero;