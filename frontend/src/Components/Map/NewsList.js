import React from 'react'
import NewsItem from '../NewsItem'

const NewsList = ({data, links}) => {


    return (
        <div className="w-full overflow-y-auto h-96 scroll-smooth">  
            <div className="max-w-md overflow-y-auto h-full ">    
                <div className="font-bold text-xl mb-2">
                    <h2>news in {data.city}</h2>
                </div>

                <div className="overflow-y-auto w-full">
                {data.articles.map((article, i) => <NewsItem key={i} text={article} link={data.urls[i]}>{console.log(article), console.log()}</NewsItem>)}
                </div>
            </div>
        </div>
      )
    }

export default NewsList