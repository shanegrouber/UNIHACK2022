import React from 'react'

const NewsItem = () => {
  return (
      <div className="py-1">
        <div className="rounded border border-2 border-gray-300 shadow-lg bg hover:">
            <div className="py-3 px-4">
                <h1 className="text-lg">News Title</h1>
                <h2>trailing text lorem ipsum testing testing testing testing</h2>
            </div>
        </div>
      </div>
  )
}

export default NewsItem;