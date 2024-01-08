/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <div className="social-media">
            <a href="#" id="twet-quote">
              <span><i class="fa-brands fa-whatsapp"></i></span>
            </a>
            <a href="#" id="tumlr-quote">
              <span><i class="fa-brands fa-facebook"></i></span>
            </a>
            <a href="#" id="tumlr-quote">
              <span><i class="fa-brands fa-instagram"></i></span>
            </a>
            <a href="#" id="tumlr-quote">
              <span><i class="fa-brands fa-linkedin"></i></span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;
