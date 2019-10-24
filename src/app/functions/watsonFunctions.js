//const mongoose = require("mongoose");
//const Product = mongoose.model("Product");

//importar a instância da biblioteca do Watson Assistant
const watsonService = require('../../services/client-watson');

module.exports = {
  async mensagem(text, context) {
    const params = {
        input: { text },
        workspace_id: 'seu workspace-id',
        context,
    };
    return new Promise((resolve, reject)=>{
      watsonService.message(params, (err, response) => {
          if (err) reject(err);
          resolve(response);
      });
    });
  }
};