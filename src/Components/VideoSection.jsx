import React, { useContext, useState, useEffect } from 'react';
import '../Styles/VideoSection.css';
import interviewerImg from '../Assets/saying hi.png';
import intervieweeImg from '../Assets/profile-2.png';
import { useNavigate } from 'react-router-dom';
import { audioContext } from '../Context/Context.jsx'; 

export default function VideoSection() {
  const { speak, recognition , finalanswer } = useContext(audioContext);

  const navigate = useNavigate(); 
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [interviewEnded, setInterviewEnded] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Speak "Hello" every time isSpeaking becomes false
  useEffect(() => {
    if (!isSpeaking) {
    
              console.log(`Rico speaking : ${finalanswer}`); 
      speak(finalanswer);
    }
    // eslint-disable-next-line
  }, [isSpeaking]);

  // Start/stop recognition based on isSpeaking
  useEffect(() => {
    if (isSpeaking) {
      try {
        recognition.start();
      } catch (e) {
        // Ignore if already started
      }
    } else {
      recognition.stop();
    }
    // eslint-disable-next-line
  }, [isSpeaking]);

  const handleEndInterview = () => {
    setInterviewEnded(true);
    setIsSpeaking(false);
    navigate("/");
  };

  const handleToggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="video-section-container">
      <div className="video-left">
        <img src={interviewerImg} alt="interviewer" className="video-feed" />
        <div className="timing">
          <div className="record-badge">RECORDING</div>
          <p className="label">Interview Duration</p>
          <p className="time">{formatTime(duration)}</p>
        </div>
        {!isSpeaking && (
          <div className="speaking-indicator">
            <div className="ping-dot"></div>
            <span>Rico is Speaking...</span>
          </div>
        )}
      </div>
      <div className="video-right">
        <img src={intervieweeImg} alt="interviewee" className="thumbnail" />
        <div className="video-buttons">
          <button onClick={handleEndInterview} className="end-btn">
            End Interview
          </button>
          <button
            onClick={handleToggleSpeaking}
            className={isSpeaking ? 'stop-btn' : 'start-btn'}
          >
            {isSpeaking ? 'Stop Answering' : 'Start Answering'}
          </button>
        </div>
      </div>
    </div>
  );
}