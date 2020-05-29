import { Product } from '../entity/Product';
import { getConnection } from 'typeorm';



export async function resolveProductRefernce(reference:Pick<Product,"id">):Promise<Product> {
    const product = await getConnection().getRepository(Product).findOne({where:{id:reference.id}})
    if (!product) {
        throw new Error("ProductRerference id invalid ")
    }
    return product
}