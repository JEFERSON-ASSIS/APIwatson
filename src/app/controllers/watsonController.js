const watsonFunc = require('../functions/watsonFunctions')

module.exports = {
  async mensagem(req, res) {
    const { workspaceID} = req.params;
    const { text, context = {} } = req.body;

    watsonFunc.mensagem(workspaceID,text, context)
      .then((response)=>{
        res.json(response);
      })
      .catch((err)=>{
        res.status(500).json(err);
      })
  }
};