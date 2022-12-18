//import react from 'react';
import styles from "./main.module.css"
import iphoneImage from "../assets/iphone.png"
import groceryImage from "../assets/main-grocery-store.png"
import HowItWorks from "./HowItWorks"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import Footer from "./Footer";

export default function Main()
{
    const navigate = useNavigate();
    const { logOut, user } = useUserAuth();
    const handleBudget = async () => {
        try {
          await logOut();
          navigate("/budget");
        } catch (error) {
          console.log(error.message);
        }
      };
      
return(
    <>
        <Navbar/>
        <div>
            <p className={styles.budgetText}>Budget with a why</p>
            <p className={styles.spendText}>Spend, save, and give toward what's important in life</p>
            <button onClick={handleBudget} className={styles.budgetButton}>Create Your Budget</button>
        </div>     
        <div className={styles.bgBox}>
            <img className={styles.iphoneImage} src={iphoneImage} alt={iphoneImage}></img>
            <img className={styles.groceryImage} src={groceryImage} alt={groceryImage}></img>
        </div>
     
        <Footer/>
        </>
)

}
