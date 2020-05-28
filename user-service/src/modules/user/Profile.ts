import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { MyContext } from '../../utils/myContext';
import { User } from "../../entity/User";
import { isAuth } from '../middleware/isAuth';

@Resolver()
export class MeResolver{

    @Query(()=>User)
    @UseMiddleware(isAuth)
    async me(@Ctx() ctx:MyContext):Promise<User | undefined>{
     return await User.findOne(ctx.req.userId)
    }


}