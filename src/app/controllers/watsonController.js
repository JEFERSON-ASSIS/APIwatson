const watsonFunc = require('../functions/watsonFunctions')

module.exports = {
  async mensagem(req, res) {
    const { text, context = {} } = req.body;

    watsonFunc.mensagem(text, context)
      .then((response)=>{
        res.json(response);
      })
      .catch((err)=>{
        res.status(500).json(err);
      })
  }
};