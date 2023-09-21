import { useState } from 'react'
import viteLogo from '/vite.svg'
import styles from '../src/App.module.css'
import { Navbar } from './components/Navbar';
import { About } from './About/About';

function App() {
  
  return ( 
    <div>
      
        <div className={styles.App2}>
        <div className={styles.App}>
        <Navbar />
        <About />
        </div>
      </div>
      
     
    </div>
    
  );
}

export default App
