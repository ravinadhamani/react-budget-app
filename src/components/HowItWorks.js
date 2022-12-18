import styles from "./HowItWorks.module.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function HowItWorks(){
    return(
        <>
        <Navbar/>
        <div className={styles.header}>
            <p className={styles.howitworks}>How It Works</p>
            <p className={styles.howitworksTxt}>
            MyBudgetApp is a budget tracker for the modern age. <br></br>
           Say no more to carrying paper envelopes. This virtual budget<br></br>
            program keeps you on track with family and <br></br>
            friends with the time-tested envelope budgeting method.</p>
            
        </div>
        <Footer/>
        </>
    )
}
