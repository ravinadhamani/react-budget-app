import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
import styles from './newsItem.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
//require('dotenv').config({ path: '../../.env' })

const NewsList = () => {
    const [articles, setArticles] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=74b3a0c17882f558376cbe68dd4b4490&lang=en`)
           // https://newsapi.org/v2/everything?q=finance&apiKey=7fc3e528692a4b8885dbee9f1b997461
            setArticles(response.data.articles)
            console.log("response", response)
        }

        getArticles()
    }, [])
    return (
        <>
            <Navbar />
            <div className={styles.newsMainDiv}>
                <div>
                    <p className={styles.latestNewsText}>Latest News</p>
                </div>
                <div className={styles.newsApp}>
                    {articles.map(article => {
                        return (                   
                                <NewsItem
                                    title={article.title}
                                    description={article.description}
                                    url={article.url}
                                    urlToImage={article.image}
                                />    
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NewsList