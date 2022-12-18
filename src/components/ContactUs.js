import Footer from "./Footer"
import styles from "./HowItWorks.module.css"
import Navbar from "./Navbar"

export default function HowItWorks(){
    return(
        <>
        <Navbar/>
        <div className={styles.header}>
            <p className={styles.howitworks}>Customer Support</p>
            <p className={styles.howitworksTxt}>
            
With a handful of DIY resources and friendly customer support, 
we’re here to help when you need it.</p>
        
        </div>
        <p className={styles.emailText}>Email- budgetsupport@help.in</p>
        <p className={styles.emailText}>Contact- +918888434340</p>
        <Footer/>
        </>
    )
}
