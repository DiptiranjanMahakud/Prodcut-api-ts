"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import express: This imports the entire express library. The express library is a popular web framework for Node.js, simplifying the process of building web applications and APIs by providing a set of powerful features and middleware.
//, { Request, Response }: This part uses destructuring to import specific types/interfaces from the express module. The Request and Response interfaces are used to define the types of the req (request) and res (response) objects in your route handlers.
const cmp_productService = __importStar(require("../services/cmp_product-service"));
//import * as cmp_productService: This uses the * wildcard to import all exports from the specified module.
//from '../services/cmp_product-service': This part specifies the module from which you are importing. In this case, it's the module located at ../services/cmp_product-service'.
const router = express_1.default.Router();
//express.Router(): This method creates a new router object. A router is a mini-instance of an Express application, and it can be used to group routes and middleware. It allows you to modularize your routes and handle them separately from the main application.
//const router: This declares a constant variable named router and assigns it the newly created router object.
// Function to retrieve all product list of a company as per the product's available units
router.get('/productlist/:cmpId', (req, res) => {
    const cmpId = parseInt(req.params.Id);
    cmp_productService.getAllProductsForCompany(parseInt(req.params.cmpId)).then((products) => {
        res.send(products);
    });
});
//router.get('/productlist/:cmpId', ...): This sets up a route handler for HTTP GET requests at the path '/productlist/:cmpId', where :cmpId is a route parameter representing the company ID.
//const cmpId: number = parseInt(req.params.cmpId);: This line parses the cmpId from the route parameters (req.params.cmpId). It ensures that the cmpId is a number.
//cmp_productService.getAllProductsForCompany(cmpId): This invokes the getAllProductsForCompany function from the cmp_productService module, passing the parsed cmpId.
//.then((products) => { res.send(products); }): If the promise returned by getAllProductsForCompany resolves successfully, the products are sent as a response. The res.send(products) sends a JSON response containing the list of products.
// Function to retrieve product name, original price, price after discount for a given company
router.get('/productInfo/:cmpId', (req, res) => {
    const cmpId = parseInt(req.params.id);
    cmp_productService.getProductDetailsForCompany(parseInt(req.params.cmpId)).then((products) => {
        res.send(products);
    });
});
// Function to retrieve name of the products with discount more than average discount for a given company
router.get('/aboveAvgDiscount/:cmpId', (req, res) => {
    const cmpId = parseInt(req.params.id);
    cmp_productService.getProductsAboveAvgDiscount(parseInt(req.params.cmpId)).then((products) => {
        res.send(products);
    });
});
// Function to retrieve all company details who are providing the most discounts on all products in ascending order
router.get('/MostDiscounts', (req, res) => {
    cmp_productService.getCompaniesWithMostDiscounts(parseInt(req.params.cmpId)).then((products) => {
        res.send(products);
    });
});
exports.default = router;
