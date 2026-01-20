// import { useState } from "react";
// import "./VAChatbot.css";

// const VAChatbot = () => {
//   const [open, setOpen] = useState(false);
  

//   return (
//     <>
//       {/* Floating Button */}
//       <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
//         💬
//       </div>

//       {/* Chatbot Window */}
//       {open && (
//         <div className="chatbot">
//           <div className="chatbot-header">
//             <img src="/uma-avatar.png" alt="Uma" />
//             <span>Uma Maheshwari</span>
//             <button onClick={() => setOpen(false)}>✕</button>
//           </div>

//           <div className="chatbot-body">
//             <div className="bot-msg">
//               Hi, I am Uma. How may I assist you?
//             </div>

//             <div className="bot-msg">
//               Please choose an option below to continue:
//             </div>

//             <button className="chat-option">Services Information</button>
//             <button className="chat-option">
//               Compliance & Documentation Support
//             </button>
//             <button className="chat-option">General Enquiry</button>
//             <button className="chat-option">Other</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VAChatbot;


import { useState,useRef,useEffect } from "react";
import "./VAChatbot.css";

const VAChatbot = () => {
  const [open, setOpen] = useState(false);

    const getTime = () =>
    new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
  
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, I am Uma. How may I assist you?" },
    {
      from: "bot",
      text: "Please choose an option below to continue:",
      options: [
        "Services Information",
        "Compliance & Documentation Support",
        "General Enquiry",
        "Other",
      ],
      time: getTime(),
    },
  ]);

  
  const chatEndRef = useRef(null);


  const notificationSound = useRef(null);

  const playSound = () => {
    if (notificationSound.current) {
      notificationSound.current.currentTime = 0;
      notificationSound.current.play();
    }
  };

  

  useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const [isTyping, setIsTyping] = useState(false);



//   const addMessage = (msg) => {
//     setMessages((prev) => [...prev, msg]);
//     playSound();
//   };

  const addMessage = (msg) => {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { ...msg, 
        time: getTime(),
        // time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) 
    }
    ]);
    playSound();
    setIsTyping(false);
  }, 800); // typing delay
};

  



  const handleOptionClick = (option) => {

    addMessage({ from: "user", text: option });

    if (option === "Services Information") {
      addMessage({
        from: "bot",
        text: "Which service are you interested in?",
        options: ["GST", "Company Registration", "Income Tax"],
      });

    }

    if (option === "Compliance & Documentation Support") {
      addMessage({
        from: "bot",
        text: "Please select the compliance type:",
        options: ["ROC", "GST Returns", "Audit Support"],
      });
    }

    if (option === "General Enquiry") {
      addMessage({
        from: "bot",
        text: "Please type your enquiry below.",
      });
    }

    if (option === "Other") {
      addMessage({
        from: "bot",
        text: "Please share your requirement.",
      });
    }
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        {/* 💬 */}
        <img src="/chatbot-icon2.jpg" alt="Chatbot" />
      </div>

      {open && (
        <div className="chatbot">
          <div className="chatbot-header">
            <img src="/uma-avatar.png" alt="Uma" />
            <span>Uma Maheshwari</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index}>
                <div className={msg.from === "bot" ? "bot-msg" : "user-msg"}>
                  {msg.text}
                  <div className="time">{msg.time}</div>
                </div>

                {msg.options &&
                  msg.options.map((opt, i) => (
                    <button
                      key={i}
                      className="chat-option"
                      onClick={() => handleOptionClick(opt)}
                    >
                      {opt}
                    </button>
                  ))}
              </div>
            ))}
            {isTyping && <div className="typing">Uma is typing...</div>}

            <div ref={chatEndRef}></div>
          </div>
        </div>
      )}
      <audio ref={notificationSound} src="/chatbot-notification.mp3" />
    </>
  );
};

export default VAChatbot;
