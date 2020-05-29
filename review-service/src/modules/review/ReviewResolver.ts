import { Resolver, Query, Mutation, Arg, Root, UseMiddleware } from "type-graphql";
import { Review } from '../../entity/Review';
import { Product } from "../product/Product";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';


@Resolver()
export class ReviewResolver{


    @Query(()=>[Review])
    @UseMiddleware(isAuthMiddleware)
    async getAllReview():Promise<Review[]>{
        const products = await Review.find()
        return products
    }

    @Mutation(()=>Boolean)
    @UseMiddleware(isAuthMiddleware)
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