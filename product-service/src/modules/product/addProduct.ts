import { Resolver, Query, Mutation, Arg, Directive } from "type-graphql";
import { Product } from '../../entity/Product';

@Resolver()
export class AddProductResolver{

    @Directive("@extend")
    @Mutation(()=>Boolean)
    async createProduct(
        @Arg("name")name:string,
        @Arg("description")description:string,
        @Arg("price")price:number,
        @Arg("userId")userId:number,
    ):Promise<boolean>{
        
        const product =  await Product.create({
            name,
            description,
            price,
            userId
        }).save()
        if (!product) {

            return false
        }
        return true
    }

}