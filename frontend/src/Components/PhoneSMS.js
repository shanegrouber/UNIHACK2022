
import React, { Component } from 'react'


class PhoneSMS extends Component{

  state = {
    text:{
      recipient: ''
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
    <div >
      <h2 className='text-sm text-justify'>Keep up to date with the news!</h2>
    <input className="bg-slate-300 border border-sky-400  rounded-lg hover:shadow-xl focus:border-sky-500 focus:border-2 focus:ring-1 focus:ring-sky-500 focus:outline-none shadow-sm 
"   placeholder='e.g 0456755098'   value={text.recipint} onChange={e => this.setState({ text: {...text, recipient: e.target.value}})}></input>
    <button className=' bg-indigo-400 rounded-lg font-bold transition ease-in-out delay-60 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300 pl-4 pr-4 ml-2
    ' onClick={this.sendText}>Subscribe</button>
    </div>
    );
  }
}

export default PhoneSMS

