import React, { useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../utils";
// import { Profile } from "../Profile/Profile";




export const About = () => {
  const [showProfile,setShowProfile]=useState(false) ; 
 const handleClick=()=>{
  setShowProfile((prevShowProfile)=>!prevShowProfile);
 };

  return (
    
    <section className={styles.container} id="about">
      {/* <p1 className={styles.title11}>I'm Rajat Payal </p1> */}
      <div>
        <br></br>
      </div>
      <div className={styles.content}>
        {/* <img
          // src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              "Experience thrilling white-water rafting adventures with expert guides amidst breathtaking nature in remote, untamed rivers. An unforgettable adrenaline rush awaits!"
              </p>
              <br />
              <br />
              
              
            </div>
            
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li> */}
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>  
      
      {/* <div>
        <button className={styles.morebutton} onClick={handleClick}> <p className={styles.title12}>&nbsp;&nbsp;&nbsp;more....&nbsp;</p>

        </button>
        {showProfile && <Profile />}
      </div> */}

    </section>
  );
};
