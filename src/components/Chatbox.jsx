import React, { useState, useRef, useEffect } from 'react';

export default function Chatbox() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Vaishnavi\'s assistant. How can I help?' }
  ]);
  const [value, setValue] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage() {
    if (!value.trim()) return;
    const userMsg = { from: 'user', text: value };
    setMessages(m => [...m, userMsg]);
    setValue('');
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: 'Thanks! I will get back to you soon.' }]);
    }, 700);
  }

  return (
    <div className="chatbox-container" style={{display: open ? 'block' : 'none'}}>
      <div className="chatbox">
        <div className="chatbox-header">
          <div>Chat with Vaishnavi</div>
          <div style={{cursor:'pointer'}} onClick={() => setOpen(false)}>✕</div>
        </div>
        <div className="chatbox-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-message ${m.from === 'user' ? 'user' : 'bot'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chatbox-input">
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Type a message..." onKeyDown={e => e.key === 'Enter' && sendMessage()} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      {!open && (
        <button className="chat-open" onClick={() => setOpen(true)}>Chat</button>
      )}
    </div>
  );
}