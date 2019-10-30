//const mongoose = require("mongoose");
//const Product = mongoose.model("Product");

//importar a instância da biblioteca do Watson Assistant
const watsonService = require('../../services/client-watson');

module.exports = {
  async mensagem(workspaceID, text, context) {
    /*const params = {
        input: { text },
        workspace_id: workspaceID,
        context,
    };
    return new Promise((resolve, reject)=>{
      watsonService.message(params, (err, response) => {
          if (err) reject(err);
          resolve(response);
      });
    });*/
    const params = {
      workspace_id: workspaceID,
    };
    return new Promise((resolve, reject)=>{
      watsonService.listDialogNodes(params, (err, response) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(response);
      });
    });
  }
};