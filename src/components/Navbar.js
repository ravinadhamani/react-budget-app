import styles from "./main.module.css"
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import logo from '../assets/icons8-menu-50.png'

export default function Navbar()
{
    const navigate = useNavigate();
    const { logOut, user } = useUserAuth();
    
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

    const handleHowItWorks = async () => {
        try {
          await logOut();
          navigate("/howItWorks");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handlePodcast = async () => {
        try {
          await logOut();
          navigate("/podcasts");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleNews = async () => {
        try {
          await logOut();
          navigate("/news");
        } catch (error) {
          console.log(error.message);
        }
      }; 
      const handleMain = async () => {
        try {
          await logOut();
          navigate("/main");
        } catch (error) {
          console.log(error.message);
        }
      }; 
      

return(
    <>
        <div className={styles.header}>
            <p onClick={handleMain} className={styles.brandName}>MyBudgetApp</p>
            <p onClick={handleHowItWorks} className={styles.headerName}>How It Works?</p>
            <p onClick={handlePodcast} className={styles.headerName}>Podcasts</p>
            <p onClick={handleNews} className={styles.headerName}>Finance News</p>
            <button onClick={handleLogout} className={styles.logoutBtn}>Log Out</button>
            
        </div>
        </>
)
}