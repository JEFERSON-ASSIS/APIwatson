//importar a Biblioteca do Watson 
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

//criar variável de configurações, obtidas na criação do serviço na IBM Cloud 
const watsonAssistant = new AssistantV1({
    version: process.env.WATSON_VERSAO,
    username: process.env.WATSON_USER,
    password: process.env.WATSON_SENHA,
    url: process.env.WATSON_API_URL
});

//exportar a instância para usar dentro da watsonFunctions.js 
module.exports = watsonAssistant;