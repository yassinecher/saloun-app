import React, { useState } from 'react';

function Conversation() {
  const [messages, setMessages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newMessage = e.target.elements.message.value;
    setMessages([...messages, newMessage]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Conversation;