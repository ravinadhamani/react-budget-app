import React from 'react'
import styles from './newsItem.module.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <>

            <div className={styles.newsMain}>
                <div className={styles.newsItem}>
                    <img className={styles.newsImg} src={urlToImage} alt={urlToImage} />
                    <p><a className={styles.url} href={url}>{title}</a></p>
                    <p className={styles.newsText}>{description}</p>
                </div>
            </div>
        </>
    )
}

export default NewsItem;