const mongoose = require("mongoose");
 
const service = new AssistantV1({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
  }),
  url: '{url}',
});

service.message({
  assistantId: '{assistant_id}',
  sessionId: '{session_id}',
  input: {
    'message_type': 'text',
    'text': 'Hello'
    }
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 1));
  })
  .catch(err => {
    console.log(err);
  });

  mongoose.model("Product", service);