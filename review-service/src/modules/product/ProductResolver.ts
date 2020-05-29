import { Resolver,  FieldResolver, Root } from "type-graphql";
import { Product } from './Product';
import { Review } from '../../entity/Review';


@Resolver(of=>Product)
export class ProductResolver{
    @FieldResolver(()=>[Review])
    async reviews(@Root() product:Product):Promise<Review[]>{
        const reviews = Review.find({where:{productId:product.id}})

        if (!reviews) {
            throw new Error("Reviews undefiend")
        }
        return reviews
    }




}