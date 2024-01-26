"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompaniesWithMostDiscounts = exports.getProductsAboveAvgDiscount = exports.getProductDetailsForCompany = exports.getAllProductsForCompany = void 0;
const connection_1 = require("../connection");
//It seems like you are importing the db constant from a file located at '../connection'. This is a common approach in modular Node.js/TypeScript applications, where you have a centralized file responsible for establishing a database connection (or other similar setup), and other modules can import the exported objects for database interactions.
// Function to retrieve all product list of a company as per the product's available units
function getAllProductsForCompany(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield connection_1.db.any('SELECT cp.company_id, p.product_name, cp.discount, cp.available_units FROM Company_Products cp JOIN Products p ON cp.product_id = p.product_uuid WHERE cp.company_id = $1', [id]);
    });
}
exports.getAllProductsForCompany = getAllProductsForCompany;
//export async function getAllProductsForCompany(id: number): This line declares an asynchronous function named getAllProductsForCompany. The function takes a parameter id of type number, representing the company ID for which you want to retrieve products.
//return await db.any(...): This line uses db.any to execute a SQL query against the database. db.any is typically used when you expect multiple rows in the result set. The query retrieves information about products for a specific company by joining the Company_Products and Products tables.
//[id]: This array contains the parameter values for the placeholders in the SQL query. In this case, it's an array with a single element [id], where id is the company ID passed as an argument to the function.
//await: The await keyword is used to wait for the completion of the db.any query. The function is marked as async, allowing the use of await to handle promises in a more readable manner.
// Function to retrieve product name, original price, price after discount for a given company
function getProductDetailsForCompany(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield connection_1.db.any('SELECT p.product_name, p.price, p.price - (p.price * cp.discount) AS discounted_price FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1', [id]);
    });
}
exports.getProductDetailsForCompany = getProductDetailsForCompany;
// Function to retrieve name of the products with discount more than average discount for a given company
function getProductsAboveAvgDiscount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield connection_1.db.any('SELECT p.product_name FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1 AND cp.discount > (SELECT AVG(cp2.discount) FROM Company_Products cp2 WHERE cp2.company_id = $1)', [id]);
    });
}
exports.getProductsAboveAvgDiscount = getProductsAboveAvgDiscount;
// Function to retrieve all company details who are providing the most discounts on all products in ascending order
function getCompaniesWithMostDiscounts(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield connection_1.db.any('SELECT c.company_id, c.company_name, SUM(cp.discount) AS total_discount FROM Company_Products cp JOIN Company c ON cp.company_id = c.company_id GROUP BY c.company_id, c.company_name ORDER BY total_discount ASC', [id]);
    });
}
exports.getCompaniesWithMostDiscounts = getCompaniesWithMostDiscounts;
// export const saveProduct = async (country: any) => {
//     return await db.one('INSERT INTO product(product_uuid, product_name, description, weight , price, ratting ) VALUES ($1, $2, $3, $4, $5)',
//         [country.capital, country.code, country.continent, country.description, country.nationality])
// }
