import {db} from '../connection'

// export const getAllProductsForCompany = async () => {
//     return await db.query('SELECT cp.company_id, p.product_name, cp.discount, cp.available_units FROM Company_Products cp JOIN Products p ON cp.product_id = p.product_uuid WHERE cp.company_id = $1')
// }


export async function getAllProductsForCompany(id: number) {
    return await db.any('SELECT cp.company_id, p.product_name, cp.discount, cp.available_units FROM Company_Products cp JOIN Products p ON cp.product_id = p.product_uuid WHERE cp.company_id = $1',
     [id])
}


export async function getProductDetailsForCompany(id: number) {
    return await db.any('SELECT p.product_name, p.price, p.price - (p.price * cp.discount) AS discounted_price FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1',
     [id])
}


export async function getProductsAboveAvgDiscount(id: number) {
    return await db.any('SELECT p.product_name FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1 AND cp.discount > (SELECT AVG(cp2.discount) FROM Company_Products cp2 WHERE cp2.company_id = $1',
     [id])
}

export async function getCompaniesWithMostDiscounts(id: number) {
    return await db.any('SELECT c.company_id, c.company_name, SUM(cp.discount) AS total_discount FROM Company_Products cp JOIN Company c ON cp.company_id = c.company_id GROUP BY c.company_id, c.company_name ORDER BY total_discount ASC',
     [id])
}


// export const saveCountry = async (country: any) => {
//     return await db.one('INSERT INTO Country(capital, code, continent, description, nationality) ' +
//         'VALUES ($1, $2, $3, $4, $5)',
//         [country.capital, country.code, country.continent, country.description, country.nationality])
// }