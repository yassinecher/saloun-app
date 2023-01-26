import React, { useState, useEffect } from 'react';
import { db } from './firebase';

//Conversation component yekhou conversationId as a prop w yekhdem bil useEffect hook bech ya3mel subscribe lil updates 
//eli fil les messages mta3 conversation eli bech yekhouha mil ID eli fil Firebase database. 
//component bech yraja3 les messages bil map function w ya3mel displays fi unordered list.
//wa9teli el user submits el form, new message bech yetzed lil conversation's messages fil database.

function Conversation({ conversationId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('conversations')
      .doc(conversationId)
      .collection('messages')
      .onSnapshot((snapshot) => { const messagesData = snapshot.docs.map((doc) => doc.data());
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
