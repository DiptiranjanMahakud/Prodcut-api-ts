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
const http_1 = __importDefault(require("http")); //The 'http' module provides functionality to create HTTP servers and make HTTP requests
//from 'http': This part specifies the module you want to import. In this case, it's the 'http' module, which is a core module in Node.js used for handling HTTP operations.
const express_1 = __importDefault(require("express")); //The 'express' module is a popular web framework for Node.js that simplifies the process of building web applications and APIs. By importing it, you gain access to various functions and features that make it easier to handle HTTP requests, routing, middleware, and more.
//{ Express }: This is a named import from the 'express' module. It specifically imports the Express type/interface from the 'express' module. The Express type is often used when you want to explicitly define the type of an Express application.
//using this line of code, you are importing the 'express' module and making both the default export (which is the main functionality of Express) and the Express type available in your code. You can then use the 'express' module to create an instance of an Express application and define routes, middleware, and other settings for your web application.
const cmp_productController = __importStar(require("./controllers/cmp_product-controller"));
//*: The asterisk (*) is used to import all exports from the specified module.
//as cmp_productController: This part renames the imported module to cmp_productController. It means that you can use the name cmp_productController in your code to reference all the exports from the './controllers/cmp_product-controller' module.
//from './controllers/cmp_product-controller': This part specifies the relative path to the module you want to import.
//this line of code is importing all exports from the './controllers/cmp_product-controller' module and assigning them to the variable cmp_productController. This is commonly used when the module being imported contains multiple exports (functions, objects, etc.), and you want to use them collectively under a specific name.
const router = (0, express_1.default)(); //= express(): This part initializes the router variable by calling the express() function. This function is a part of the Express framework and is used to create an instance of an Express application or router.
//router: This is the name of the variable being declared. It represents an instance of an Express router.
// :Express: This part is using TypeScript syntax to explicitly specify the type of the router variable. It indicates that router should have the type of Express. In this context, Express is a type/interface provided by the Express framework, and it represents an Express application.
router.use(express_1.default.json()); //express.json(): express.json() is a built-in middleware in Express that parses incoming JSON requests. It automatically parses the request body, assuming it is in JSON format, and makes the parsed data available on the req.body property.
//router.use: The use method in Express is used to mount middleware functions on the router. Middleware functions in Express have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
router.use('/api', cmp_productController.default); //cmp_productController.default: The cmp_productController is likely an imported module (maybe from './controllers/cmp_product-controller'). The .default property refers to the default export of that module.
//router.use: The use method in Express is used to mount middleware functions or other routers on the specified path.
///api': This is the path prefix. It specifies that the middleware or routes being mounted will only apply to URLs that start with '/api'.
const httpServer = http_1.default.createServer(router);
//http.createServer: This method is part of Node.js's built-in http module. It creates an HTTP server instance
//router: The Express router (router) is passed as an argument to the createServer method. This means that the Express router will handle incoming HTTP requests for this server.
//httpServer: The variable httpServer is assigned the created HTTP server instance. This server will use the specified Express router to handle requests.
httpServer.listen(6060, () => {
    console.log(`Server is running at port 6060`);
});
//httpServer.listen: This method is called on the HTTP server (httpServer) to start listening for incoming requests.
//6060: The first argument is the port number on which the server will listen for incoming requests. In this case, it's set to port 6060.
//import: As mentioned earlier, this is an ES6 feature that allows you to include external modules in your code.
