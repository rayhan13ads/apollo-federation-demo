import { Resolver, Query, Mutation, Arg, Root, FieldResolver } from "type-graphql";
import { Review } from '../../entity/Review';
import { Product } from "../product/Product";
import { User } from "../user/User";

@Resolver(of => Review)
export class ReviewUserResolver{

    user(@Root()review:Review){
       return {__typename:"User", id:review.userId}
    }
    product(@Root() review:Review) {
        return { __typename: "Product", id: review.productId };
      }  

}

