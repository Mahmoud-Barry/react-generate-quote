import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {BsTwitter} from "react-icons/bs"
import {FaQuoteLeft} from "react-icons/fa"
function App() {

  const [text, setText] = useState("")
  const [author, setAuthor] = useState("")
  const quoteUrl = "https://type.fit/api/quotes"
 
  let allQuotes= [];
  let quoteContent ={}
  const newQuote =()=>{
   quoteContent = allQuotes[Math.floor(Math.random() * allQuotes.length)]
   setText(quoteContent.text)
   setAuthor(quoteContent.author)
  }
  async function getQuotes(){
      try {
          const response = await fetch(quoteUrl);
          allQuotes = await response.json()
          newQuote()
      } catch (error) {
        
      }
  }

  useEffect(()=>{
    getQuotes()
  },[])
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
        <div className="row  w-100">
            <div className="col-12 bg-dark text-white  col-md-6  py-3 px-4 rounded">
                <div id="quote-box">
                    <div className="quote">
                      <h2 id="text"><i className='me-3'><FaQuoteLeft /></i>{text}</h2>
                      <span id="author ">- {author? author: "Unknown"}</span>
                    </div>
                    <div className="quote-button d-flex justify-content-between my-3">
                        <a className='bg-white py-2 px-3 rounded ' href={`https://twitter.com/intent/tweet?text=${text} - ${author}`} target="_blank" id='tweet-quote'><BsTwitter /></a>
                        <div className="btn btn-success" onClick={getQuotes} id="new-quote">New quote</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
