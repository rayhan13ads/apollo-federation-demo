import { Resolver, Query, Mutation, Arg, Root } from "type-graphql";
import { Review } from '../../entity/Review';
import { Product } from "../product/Product";


@Resolver()
export class ReviewResolver{

    @Query(()=>[Review])
    async getAllReview():Promise<Review[]>{
        const products = await Review.find()
        return products
    }

    @Mutation(()=>Boolean)
    async createReview(
        @Arg("body")body:string,
        @Arg("productId")productId:number,
        @Arg("userId")userId:number,
    ):Promise<boolean>{
        
        const review =  await Review.create({
            body,
            userId,
            productId
        }).save()
        if (!review) {

            return false
        }
        return true
    }

  

}