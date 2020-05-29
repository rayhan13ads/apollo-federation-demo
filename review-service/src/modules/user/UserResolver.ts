import { Resolver,  FieldResolver, Root } from "type-graphql";
import { Review } from '../../entity/Review';
import { User } from "./User";


@Resolver(of=>User)
export class UserResolver{
    @FieldResolver(()=>[Review])
    async reviews(@Root() user:User):Promise<Review[]>{
        const reviews = Review.find({where:{productId:user.id}})

        if (!reviews) {
            throw new Error("Reviews undefiend")
        }
        return reviews
    }


}