import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function Conversation({ conversationId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('conversations')
      .doc(conversationId)
      .collection('messages')
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
      });
    return () => unsubscribe();
  }, [conversationId]);

  function handleSubmit(e) {
    e.preventDefault();
    const newMessage = e.target.elements.message.value;
    db.collection('conversations')
      .doc(conversationId)
      .collection('messages')
      .add({ message: newMessage });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Conversation;
