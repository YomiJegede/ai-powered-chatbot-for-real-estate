// This service processes user queries related to the chatbot, which can be expanded depending on your chatbot integration (e.g., Dialogflow).
// In the real implementation, you'd likely replace the processChatMessage function with something more sophisticated, like an integration with Dialogflow or another NLP API.
// Dummy service for handling chatbot logic
// This is where you could integrate with Dialogflow, Watson, or another chatbot platform.

exports.processChatMessage = (message) => {
  if (message.toLowerCase().includes('property')) {
    return 'I can help you find a property. What type of property are you looking for?';
  }
  return 'Sorry, I didn’t quite understand that. Can you please specify your query?';
};

