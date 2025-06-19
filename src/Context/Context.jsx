import React, { createContext } from 'react';
import run from '../gemini.js'
import { useState } from 'react';
const audioContext = createContext();

function Context({ children }) {
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
const [finalanswer, setFinalanswer] = useState('');

React.useEffect(() => {
        async function fetchInitialAnswer() {
                const response = await run(`So you are an interviewer and i am being interviewed by you , My name is himanshu and i want an interview on backend development 
                        , so as an interview you have to behave like that first ask me to introduce my self and when i am done then ask increasing difficulty level questions one by one as an conversation   `);
                console.log(response)
                setFinalanswer(response);
        }
        fetchInitialAnswer();
}, []);
 async function Airesponse(params) {
              setFinalanswer (   await run(params) ) ; 
              
 }
  let speachrecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
  let recognition = new speachrecognition();
         recognition.onresult = (e) => { 
                let currindex = e.resultIndex;
                let transcript = e.results[currindex][0].transcript;
                console.log(`I am speaking : ${transcript}`);
                        Airesponse(transcript); 
         }

  return (
   
    <audioContext.Provider value={{ speak, recognition , finalanswer  }}>
      {children}
    </audioContext.Provider>
  );
}

export { Context, audioContext };