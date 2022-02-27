import React from 'react'

const NewsItem = ({text, link}) => {
  return (
      <div className="py-1">
        <div className="rounded border border-2 border-gray-300 shadow-lg bg hover:">
            <div  className="py-3 px-4">
                <h1 className="text-lg"></h1>
                <h2>{text}</h2>
                <a href={link}>Go to Article</a>
            </div>
        </div>
      </div>
  )
}

export default NewsItem;