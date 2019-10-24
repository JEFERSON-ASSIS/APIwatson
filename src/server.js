//importar as bibliotecas do express e cors
const express = require('express')
const cors = require('cors')

//definir classe para iniciar a biblioteca express
class App {
  constructor () {
    this.express = express()

    require('dotenv').config()

    this.middlewares()
    this.security()
    this.routes()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }
  security () {
    this.express.disable('x-powered-by')
    this.express.disable('etag')

    this.express.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).json({
        message:
          'Erro interno do servidor, por favor, tente novamente mais tarde'
      })
    })
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
