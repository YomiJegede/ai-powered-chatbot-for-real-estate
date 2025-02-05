// Chatbot.js (Chatbot Integration)
// Here we will integrate a simple chatbot UI. This can be extended by integrating a third-party chatbot like Dialogflow or an in-house chatbot solution.


import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);

    // Send the message to the backend (chatbot service)
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', { message: input });
      setMessages([...newMessages, { text: response.data.reply, isUser: false }]);
    } catch (error) {
      console.error('Error sending message to chatbot', error);
    }

    setInput('');
  };

  return (
    <div className="chatbot">
      <Paper className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.isUser ? 'user-message' : 'bot-message'}>
            <p>{msg.text}</p>
          </div>
        ))}
      </Paper>
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" onClick={handleSendMessage}>Send</Button>
    </div>
  );
}

export default Chatbot;
