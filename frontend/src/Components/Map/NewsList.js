import React from 'react'
import NewsItem from '../NewsItem'

const NewsList = ({data, links}) => {


    return (
        <div className="flex justify-center">  
            <div className="max-w-md overflow-hidden">    
                <div className="font-bold text-xl mb-2">
                    <h2>news in {data.city}</h2>
                </div>
                {data.articles.map((article, i) => <NewsItem key={i} text={article}>{console.log(article)}</NewsItem>)}
                
        </div>
      </div>
      )
    }

export default NewsList