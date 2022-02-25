import React from 'react'

const Feed = () => {
  return (
    <div class="bg-sky-200 rounded-lg shadow-2xl shadow-lg shadow-sky-500/50 border-solid  border-0 border-blue-700 w-64 h-96 "> 
    
    
    <div class="flex flex-col-2 place-content-center">
      <h1 class=" antialiased font-bold tracking-wide underline decoration-2 underline-offset-4 ">News Feed</h1> 
      <img class="h-10 pl-2 pt-2" src='Icons/NewsPaper.png'></img>
      <span class="animate-pulse relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>

    </div>
    <div class="divide-y-8 pb-2  "></div>
    
      <div class="grid grid-cols-1 gap-4 overflow-y-auto h-80 scroll-smooth ">
        <div class=" rounded-md border-black border-0 w-48 h-24 justify-self-center shadow-md bg-slate-300 shadow-slate-500/50  "></div>
        <div class=" rounded-md border-black border-0 w-48 h-24 justify-self-center shadow-md bg-slate-300 shadow-slate-500/50 "></div>
        <div class=" rounded-md border-black border-0 w-48 h-24 justify-self-center shadow-md bg-slate-300 shadow-slate-500/50 "></div>
        <div class=" rounded-md border-black border-0 w-48 h-24 justify-self-center shadow-md bg-slate-300 shadow-slate-500/50 "></div>
    </div>
    </div>
  )
}

export default Feed