import express, {Request, Response} from 'express';
import * as cmp_productService from '../services/cmp_product-service'

const router = express.Router();


router.get('/productlist/:cmpId', (req: Request, res: Response) => {
    cmp_productService.getAllProductsForCompany(parseInt(req.params.id)).then(
        (products) => {
            res.send(products);
        }
    );
});


router.get('/productInfo/:cmpId', (req: Request, res: Response) => {
    cmp_productService.getProductDetailsForCompany(parseInt(req.params.id)).then(
        (products) => {
            res.send(products);
        }
    );
});


router.get('/aboveAvgDiscount/:cmpId', (req: Request, res: Response) => {
    cmp_productService.getProductDetailsForCompany(parseInt(req.params.id)).then(
        (products) => {
            res.send(products);
        }
    );
});


router.get('/MostDiscounts', (req: Request, res: Response) => {
    cmp_productService.getProductDetailsForCompany(parseInt(req.params.id)).then(
        (products) => {
            res.send(products);
        }
    );
});



export default router;