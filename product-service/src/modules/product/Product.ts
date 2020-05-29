import { Resolver, Query, Mutation, Arg, Directive } from 'type-graphql';
import { Product } from '../../entity/Product';

@Resolver()
export class ProductResolver{

    @Directive("@extend")
    @Query(()=>[Product])
    async getAllProduct():Promise<Product[]>{
        const products = await Product.find()
        return products
    }

}