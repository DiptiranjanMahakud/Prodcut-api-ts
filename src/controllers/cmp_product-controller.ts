import express, {Request, Response} from 'express';
//import express: This imports the entire express library. The express library is a popular web framework for Node.js, simplifying the process of building web applications and APIs by providing a set of powerful features and middleware.
//, { Request, Response }: This part uses destructuring to import specific types/interfaces from the express module. The Request and Response interfaces are used to define the types of the req (request) and res (response) objects in your route handlers.

import * as cmp_productService from '../services/cmp_product-service';
//import * as cmp_productService: This uses the * wildcard to import all exports from the specified module.
//from '../services/cmp_product-service': This part specifies the module from which you are importing. In this case, it's the module located at ../services/cmp_product-service'.

const router = express.Router();
//express.Router(): This method creates a new router object. A router is a mini-instance of an Express application, and it can be used to group routes and middleware. It allows you to modularize your routes and handle them separately from the main application.
//const router: This declares a constant variable named router and assigns it the newly created router object.


// Function to retrieve all product list of a company as per the product's available units
router.get('/productlist/:cmpId', (req: Request, res: Response) => {
    const cmpId:number=parseInt(req.params.Id);
    cmp_productService.getAllProductsForCompany(parseInt(req.params.cmpId)).then(   
        (products) => {
            res.send(products);
        }
    );
});




// Function to retrieve product name, original price, price after discount for a given company
router.get('/productInfo/:cmpId', (req: Request, res: Response) => {
    const cmpId:number=parseInt(req.params.id);
    cmp_productService.getProductDetailsForCompany(parseInt(req.params.cmpId)).then(
        (products) => {
            res.send(products);
        }
    );
});


// Function to retrieve name of the products with discount more than average discount for a given company
router.get('/aboveAvgDiscount/:cmpId', (req: Request, res: Response) => {
    const cmpId:number=parseInt(req.params.id);
    cmp_productService.getProductsAboveAvgDiscount(parseInt(req.params.cmpId)).then(
        (products) => {
            res.send(products);
        }
    );
});

// Function to retrieve all company details who are providing the most discounts on all products in ascending order
router.get('/MostDiscounts', (req: Request, res: Response) => {
    cmp_productService.getCompaniesWithMostDiscounts(parseInt(req.params.cmpId)).then(
        (products) => {
            res.send(products);
        }
    );
});



export default router;