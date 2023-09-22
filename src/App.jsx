import { useState } from 'react'
import viteLogo from '/vite.svg'
import styles from '../src/App.module.css'
import { Navbar } from './components/Navbar';
import { About } from './About/About';
import { About2 } from './About2/About2';
import {Projects} from './Projects/Projects';

function App() {
  
  return ( 
    <div>
      
        <div className={styles.App2}>
        <div className={styles.App}>
        <Navbar />
        <About />
        </div>

       
      </div>
      <div className={styles.App3}>
          <About2 />
          {/* <Projects /> */}
       
          <div className={styles.App3}><Projects /> </div>
        </div>
        
     
      
     
    </div>
    
  );
}

export default App
