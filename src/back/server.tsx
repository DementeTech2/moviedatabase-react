import * as path from 'path';
import * as express from 'express'

class App {
  public express: express.Express;

  constructor () {
    this.express = express()
    this.mountRoutes()
  }



  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/api/', router)
    this.express.use(express.static(path.join(__dirname, '../front')));
  }
}

export default new App().express