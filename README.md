# ai-powered-chatbot-for-real-estate

1. Backend Directory Structure  
/backend
  ├── /controllers
  │   ├── authController.js
  │   ├── propertyController.js
  │   └── chatbotController.js
  ├── /models
  │   ├── User.js
  │   ├── Property.js
  │   └── ChatHistory.js
  ├── /routes
  │   ├── authRoutes.js
  │   ├── propertyRoutes.js
  │   └── chatbotRoutes.js
  ├── /services
  │   ├── authService.js
  │   ├── propertyService.js
  │   └── chatbotService.js
  ├── /middlewares
  │   ├── authMiddleware.js
  │   ├── isAdminMiddleware.js
  │   └── validateRequest.js
  ├── /utils
  │   └── apiResponse.js
  ├── /config
  │   └── db.js
  ├── app.js
  └── package.json
2. Frontend Directory Structure  
/frontend
  ├── /public
  │   └── index.html
  ├── /src
  │   ├── /components
  │   │   ├── Navbar.js
  │   │   ├── PropertyList.js
  │   │   ├── PropertyCard.js
  │   │   ├── Chatbot.js
  │   │   └── LoginForm.js
  │   ├── /services
  │   │   └── api.js
  │   ├── /contexts
  │   │   └── AuthContext.js
  │   ├── /styles
  │   │   └── App.css
  │   ├── App.js
  │   ├── index.js
  │   └── package.json
