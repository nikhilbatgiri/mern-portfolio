import styles from './About.module.scss';

const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.wrapper}>
                <h1>About me</h1>
                    <p>
                    Passionate and versatile professional with a proven track record in graphics designing, UI/UX creation, and full-stack web development. I blend creativity with technical expertise to deliver visually stunning and seamlessly functional digital solutions. With a keen eye for detail and a commitment to innovation, I thrive in transforming ideas into engaging and user-centric designs. Let's bring your vision to life!
                    </p>
                    <a href='https://drive.google.com/file/d/1zEfB3mGEW8TfzsO144JHRdG78V9SDz8V/view?usp=drive_link' target='blank' className={styles.btn}>View my Resume</a>
            </div>
        </div>
    )
}

export default About;