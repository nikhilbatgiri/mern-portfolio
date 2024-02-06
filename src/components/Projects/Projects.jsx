import CardComponent from './Card/CardComponent';
import styles from './Projects.module.scss';

const Projects = () => {
    return(
        <div className={styles.projects}>
            <div className={styles.wrapper}>
                <h1>Projects</h1>
                <div>
                    <CardComponent />
                </div>
            </div>
        </div>
    )
}

export default Projects;