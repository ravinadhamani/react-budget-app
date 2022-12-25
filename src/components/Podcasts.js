import styles from "./podcasts.module.css"
import PlayAudio from "react-simple-audio-player"
import chroma from "chroma-js"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import Footer from "./Footer";

export default function Podcasts()
{
    const colorScale = chroma
    .scale([
        '#0199CB',
        '#ffffff',
    ])
    .mode('lch')
    .colors(5)

    const navigate = useNavigate();
    const { logOut, user } = useUserAuth();

    const handlePodcast = async () => {
        try {
          await logOut();
          navigate("/podcasts");
        } catch (error) {
          console.log(error.message);
        }
      };
      const handlePodcast2 = async () => {
        try {
          await logOut();
          navigate("/podcasts2");
        } catch (error) {
          console.log(error.message);
        }
      };
      
    return(
        <>  
        <Navbar/>
        <div className={styles.mainPodcastDiv}>            
            <h2>Podcasts</h2>
            <div className={styles.buttonsDiv}>
                <button onClick={handlePodcast} className={styles.season1}>Season 1</button>
                <button onClick={handlePodcast2} className={styles.season2}>Season 2</button>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3>Welcome to the MybudgetApp Way</h3>
                    <p>There’s more to budgeting than just 
                        numbers. Maybe you’ve thought there’s got to be more to this
                        budgeting</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://media.blubrry.com/goodbudget_way/p/content.blubrry.com/goodbudget_way/Ep_01-Welcome_to_the_Goodbudget_Way_Season_1.mp3?_=1'} colorScale={colorScale} />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <h3>Getting $40K into debt by age 22</h3>
                    <p>What is a “smart” financial choice? And how can an 18-year-old know
                        what’s “smart” when making decisions that will impact...</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://content.blubrry.com/goodbudget_way/GBW-S2-Ep1_11.mp3'} colorScale={colorScale} />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <h3>A Financial Wakeup Call For Finance</h3>
                    <p>Many of us will experience a sudden financial 
                        wakeup call at least once in our lives. For Karisa, it took</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://content.blubrry.com/goodbudget_way/GBW-S2-Ep2_7.mp3'} colorScale={colorScale} />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <h3>Creating a debt payoff plan</h3>
                    <p>Taking the plunge into paying off debt can be intimidating. 
                        Especially when you owe a lot. Karisa can relate to</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://content.blubrry.com/goodbudget_way/GBW-S2-Ep3_10.mp3'} colorScale={colorScale} />
                    </div>
                </div>
                <div className={styles.gridItem}>
                <h3>An Unwelcome Surprise</h3>
                    <p>What’s life without a few surprises here and there? 
                        We already heard Karisa share about the surprise 
                        letter that prompted</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://content.blubrry.com/goodbudget_way/GBW-S2-Ep4_6.mp3'} colorScale={colorScale} />
                    </div>
                </div>
                <div className={styles.gridItem}>
                <h3>An Unwelcome Surprise</h3>
                    <p>What’s life without a few surprises here and there? 
                        We already heard Karisa share about the surprise 
                        letter that prompted</p>
                    <div className={styles.audio}>
                        <PlayAudio url={'https://content.blubrry.com/goodbudget_way/GBW-S2-Ep5_8.mp3'} colorScale={colorScale} />
                    </div>
                </div>
                
                
            </div>
            </div>
            <Footer/>
        </>
    )
}
