import http from 'http'
import express, {Express} from 'express'
//import * as homeController from './controllers/home-controller'
//import * as cmp_productController from './controllers/country-controller'

const router: Express = express();

router.use(express.json());

router.use('/api',
    //homeController.default,
    //cmp_productController.default
)

const httpServer = http.createServer(router)

httpServer.listen(6060, ()=>{
    console.log(`Server is running at port 6060`);
})