import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img from "../Assets/saying hi.png"
const CallStatus = {
  INACTIVE: "INACTIVE",
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
};

const Agent = (
{
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
}
) => {
  const navigate = useNavigate();
  const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState("");



  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

  }, [messages, callStatus, feedbackId, interviewId, navigate, type, userId]);


  return (
    <div>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <img
              src={img}
              alt="AI Avatar"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

      
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={
                "transition-opacity duration-500 opacity-0"
              }
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="relative btn-call" >
            <span
              className={
                "absolute animate-ping rounded-full opacity-75"
              }
            />
            <span className="relative">
              {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" >
            End
          </button>
        )}
      </div>
    </div>
  );
};

export default Agent;
