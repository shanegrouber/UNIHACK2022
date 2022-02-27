import React from 'react'

const Feed = ({news}) => {
  return (
    <div className="shadow-2xl w-5/6 h-3/4 overflow-y-hidden"> 
      <div className="flex flex-col-2 place-content-center">
        <h1 className=" antialiased font-bold tracking-wide">Active Places</h1> 
        {/* <img class="h-10 pl-2 pt-2" src='Icons/NewsPaper.png'></img> */}
        {/* <span class="animate-pulse relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
      </div>

      <div className="divide-y-8 pb-2  "></div>
      <div className="grid grid-cols-1 py-4 gap-4 overflow-y-auto h-full scroll-smooth ">
      {news.data[0].data.slice(0, 8).map((i) => 
        <div className=" w-5/6 h-24 justify-self-center shadow-md bg-slate-100 shadow-slate-500/50 ">
        <h1 className="px-2">{i.city}</h1>
        <h2 className="px-2">{i.country}</h2>
        <h2 className="px-2">Number of mentions: {i.articles.length}</h2>
        </div>
      )}
        
      </div>
    </div>
  )
}

export default Feed