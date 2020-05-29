import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import { User } from './User';
import { Product } from '../../entity/Product';

@Resolver(of=>User)
export class UserResolver{
    @FieldResolver(()=>[Product])
    async products(@Root() user:User):Promise<Product[]>{
        const products = Product.find({where:{userId:user.id}})

        if (!products) {
            throw new Error("Product undefiend")
        }
        return products
    }


}