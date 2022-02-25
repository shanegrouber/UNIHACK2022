import React from 'react'
import NewsItem from './NewsItem'

const NewsList = (props) => {
    return (
        <div className="py-10 flex justify-center">  
            <div className="bg-sky-100 max-w-md rounded overflow-hidden shadow-lg">    
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        
                        <h2>2 News in (coutry selected)</h2>
                        <button onClick={props.onClick}>Exit</button>
                    </div>
                    <NewsItem/>
                </div>
        </div>
      </div>
      )
    }

export default NewsList