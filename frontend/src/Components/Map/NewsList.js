import React from 'react'
import NewsItem from '../NewsItem'

const NewsList = () => {
    return (
        <div className="flex justify-center">  
            <div className="max-w-md overflow-hidden">    
                <div className="font-bold text-xl mb-2">
                    
                    <h2>X news in PLACE</h2>
                </div>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
        </div>
      </div>
      )
    }

export default NewsList