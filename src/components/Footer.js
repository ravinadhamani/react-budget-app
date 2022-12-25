import React from 'react';
import styles from './main.module.css';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
            <p className={styles.copyrightText}>Copyright &copy; Budget Company. All rights reserved.</p>
        
        <div className={styles.mainFooterDiv}>
        <div>
            <p>
      Budget well. Live life. Do good. A home budget app based<br></br> on the envelope 
      budget system. <br></br>Available on the Web, Android, and iPhone.<br></br>
      Replace your family budget planner, worksheet or spreadsheet <br></br>
      with software that syncs.
            </p>
        </div>
        <div>
            <p className={styles.exploreText}>Explore</p>
            <Link to="/main" className={styles.linkText}><p>Home</p></Link>
            <Link to="/howItWorks" className={styles.linkText}><p>How It Works</p></Link>
            <Link to="/podcasts" className={styles.linkText}><p>Budget Podcast</p></Link>
            <Link to="/news" className={styles.linkText}><p>Budget News</p></Link>
        </div>
        <div>
            <p className={styles.exploreText}>Get Started</p>
            <Link to="/signup" className={styles.linkText}><p>Sign Up</p></Link>
            <Link to="/" className={styles.linkText}><p>Log in </p></Link>
        </div>
        <div>
            <p className={styles.exploreText}>Get Help</p>
            <Link to="/contactus" className={styles.linkText}><p>Contact us </p></Link>
        </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
