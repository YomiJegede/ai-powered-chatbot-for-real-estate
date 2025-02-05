

// Dummy service for handling chatbot logic
// This is where you could integrate with Dialogflow, Watson, or another chatbot platform.

exports.processChatMessage = (message) => {
  if (message.toLowerCase().includes('property')) {
    return 'I can help you find a property. What type of property are you looking for?';
  }
  return 'Sorry, I didn’t quite understand that. Can you please specify your query?';
};

