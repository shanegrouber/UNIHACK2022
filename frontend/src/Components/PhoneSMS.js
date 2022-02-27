
import React, { Component } from 'react'
import axios from 'axios';

class PhoneSMS extends Component{


  
  state = {
    text:{
      AreaCode: '',
      recipient: '',
      city: '',
      countryName: ''
    }
  }
  sendText = _ => {
    const { text } = this.state;
    
    if(text.recipient === ""){
      document.getElementById('NumberField').style.borderColor= "red";
      
      
    }else{
      document.getElementById('NumberField').style.borderColor= "";
    }
    if(text.recipient === ""){
      document.getElementById('AreaCodeField').style.borderColor= "red";
      
      
    }else{
      document.getElementById('AreaCodeField').style.borderColor= "";
    }
     if (text.city === ""){
      document.getElementById('CityField').style.borderColor= "red";
     
      
    }else{
      document.getElementById('CityField').style.borderColor= "";
    }
    if (text.countryName=== ""){
      document.getElementById('CountryField').style.borderColor= "red";
  
      
    }else{
      document.getElementById('CountryField').style.borderColor= "";
    }
    if(text.recipient !== "" && text.city !== "" && text.countryName !== ""){
    fetch(`http://127.0.0.1:4000/send-first-text?AreaCode=${text.AreaCode}&recipient=${text.recipient}&city=${text.city}&countryName=${text.countryName}`)
    .catch(err => console.log(err))
    
    const data = {areaCode: text.AreaCode,
      city: text.city,
      country:  text.countryName,
      phoneNumber: text.recipient};
      
      axios({
        method: 'post',
        url: 'https://hottopicscanner.herokuapp.com/customers/add',
        data: data
      })
      .then((response) => {
        console.log(response.status);
      }, (error) => {
        console.log(error);
      });


    
    
  }


  }
  render(){
    const { text } = this.state;
    return(
    <div className=' shadow-lg w-96 h-96 '>
      <div className='absolute  pt-28 pl-16 '>
        <div className='shadow-md'>
      <h1 className='font-bold'>Get Alerted</h1>
      <h1 className='pl-24 font-bold tracking-wider underline'> Near You!</h1>
      </div>
      </div>
      <div className='mt-64 '>
        <div className='grid grid-col-2'>
      <div className='justify-self-center flex flex-row'>
          <input id='CityField' className=" w-28 ml-0.5 bg-slate-300 border  rounded-lg hover:shadow-xl  focus:outline-none shadow-sm 
    "   placeholder='e.g Adelaide'   value={text.city} onChange={e => this.setState({ text: {...text, city: e.target.value}})}></input>
        <input id='CountryField' className=" ml-3 bg-slate-300  border rounded-lg hover:shadow-xl    focus:outline-none shadow-sm 
    "   placeholder='e.g South Australia'   value={text.countryName} onChange={e => this.setState({ text: {...text, countryName: e.target.value}})}></input>
      </div>
      </div>
    <div className='grid grid-col-1'>
      <div className='justify-self-center flex flex-row'>
        <h1 className='text-gray-500 '>+</h1>
        <input id='AreaCodeField' className=" w-16 mt-2 ml-0.5 mr-0.5 bg-slate-300  border rounded-lg hover:shadow-xl     focus:outline-none shadow-sm 
    "   placeholder='e.g 61'   value={text.AreaCode} onChange={e => this.setState({ text: {...text, AreaCode: e.target.value}})}></input>
        <input id='NumberField' className="mt-2 ml-0.5 mr-0.5 bg-slate-300  border rounded-lg hover:shadow-xl     focus:outline-none shadow-sm 
    "   placeholder='e.g 0456755098'   value={text.recipint} onChange={e => this.setState({ text: {...text, recipient: e.target.value}})}></input>
      </div>
        <button className='mt-2 ml-8 mr-8  bg-indigo-400 rounded-lg font-bold transition ease-in-out delay-60 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300 pl-4 pr-4 ml-2
        ' onClick={this.sendText}>Enter</button>
        
        </div>
    </div>
    </div>
    );
  }
}

export default PhoneSMS

