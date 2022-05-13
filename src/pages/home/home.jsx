import React from "react";
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_name}>
        Hello! I'm Rohit
        <br />
        I'm a Developer
      </div>
    </div>

  );
}

export default Home;