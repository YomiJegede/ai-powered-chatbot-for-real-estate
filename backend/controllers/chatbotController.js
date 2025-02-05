

const { WebhookClient } = require('dialogflow-fulfillment');

exports.handleChatbotRequest = (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function welcome(agent) {
    agent.add('Welcome to the real estate chatbot! How can I assist you today?');
  }

  function findProperty(agent) {
    const propertyType = agent.parameters.propertyType;
    agent.add(`I’m helping you search for ${propertyType}. Please wait a moment.`);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Find Property', findProperty);

  agent.handleRequest(intentMap);
};

