import React from "react";
import styles from './CardComponent.module.scss';

// const projects = [
//     {title: 'Portfolio', description: 'A React based web application (SPA) showcasing a professional portfolio with different sections, few UI animations etc.'},
//     {title: 'Events Listing', description: 'A React based web application (SPA) simply adds, removes an event and it’s details, edits the same, fetches data from backend etc.'},
//     {title: 'Simple Blog', description: 'A React based web application (SPA) showcasing a simple blog which performs CRUD operations of adding, removing, updating the blog posts and its details, retrieving data from backend etc.'},
//     {title: 'To-Do App', description: 'A React based web application (SPA) for adding to-do tasks/activities to a list and deleting the tasks from the same.'}
// ];

const CardComponent = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
          <h2>Portfolio</h2>
        <div className={styles.overlay}>
        <p>a professional portfolio with different sections and few UI animations </p>
          <a href="https://github.com/nikhilbatgiri/Events-Listing.git" target='blank' className={styles.btn}>Git Link</a>
        </div>
      </div>
      <div className={styles.card}>
          <h2>Events Listing</h2>
        <div className={styles.overlay}>
        <p>an SPA simply adds, removes an event and it’s details, edits the same, fetches data from backend </p>
          <a href="https://github.com/nikhilbatgiri/Events-Listing.git" target='blank' className={styles.btn}>Git Link</a>
        </div>
      </div>
      <div className={styles.card}>
          <h2>Simple Blog</h2>
        <div className={styles.overlay}>
        <p>a simple blog which performs CRUD operations of the blog posts and its details, retrieving data from backend etc.</p>
          <a href="https://github.com/nikhilbatgiri/Simple-Blog.git" target='blank' className={styles.btn}>Git Link</a>
        </div>
      </div>
      <div className={styles.card}>
          <h2>To Do App</h2>
        <div className={styles.overlay}>
        <p>SPA for adding to-do tasks/activities to a list and deleting the tasks from the same.</p>
          <a href="https://github.com/nikhilbatgiri/To-Do-App.git" target='blank' className={styles.btn}>Git Link</a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;