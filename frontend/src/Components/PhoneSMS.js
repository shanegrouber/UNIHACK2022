
import React, { Component } from 'react'


class PhoneSMS extends Component{

  state = {
    text:{
      recipient: '',
      city: '',
      countryName: ''
    }
  }
  sendText = _ => {
    const { text } = this.state;
    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipint}`)
    .catch(err => console.error(err))
    console.log("Logged");
  }



  render(){
    const { text } = this.state;
    return(
    <div className=' shadow-lg w-96 h-96'>
      <div className='absolute'>
      <h1 className=''>Get Alerted With News Near You!</h1>
      </div>
      <div className='mt-64'>
          
          <input className=" ml-0.5 bg-slate-300 border border-sky-400  rounded-lg hover:shadow-xl focus:border-sky-500 focus:border-2 focus:ring-1 focus:ring-sky-500 focus:outline-none shadow-sm 
    "   placeholder='e.g Adelaide'   value={text.recipint} onChange={e => this.setState({ text: {...text, city: e.target.value}})}></input>
        <input className=" ml-3 bg-slate-300 border border-sky-400  rounded-lg hover:shadow-xl focus:border-sky-500 focus:border-2 focus:ring-1 focus:ring-sky-500 focus:outline-none shadow-sm 
    "   placeholder='e.g South Australia'   value={text.recipint} onChange={e => this.setState({ text: {...text, countryName: e.target.value}})}></input>
    <div className='grid grid-col-1'>
        <input className=" ml-0.5 mr-0.5 bg-slate-300 border border-sky-400  rounded-lg hover:shadow-xl focus:border-sky-500 focus:border-2 focus:ring-1 focus:ring-sky-500 focus:outline-none shadow-sm 
    "   placeholder='e.g 0456755098'   value={text.recipint} onChange={e => this.setState({ text: {...text, recipient: e.target.value}})}></input>
        <button className='mt-2 ml-8 mr-8 bg-indigo-400 rounded-lg font-bold transition ease-in-out delay-60 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300 pl-4 pr-4 ml-2
        ' onClick={this.sendText}>Enter</button>
        </div>
    </div>
    </div>
    );
  }
}

export default PhoneSMS

