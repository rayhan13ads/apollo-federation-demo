import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { User } from '../../entity/User';
import { MyContext } from '../types/MyContext';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';

@Resolver()
export class UsersResolver{

    @Query(()=>[User])
    async users():Promise<User[]>{
        return await User.find()
    }
    
    @Query(()=>String)
    @UseMiddleware(isAuthMiddleware)
    async me(@Ctx(){payload}:MyContext):Promise<string>{
        console.log(payload);
        
        return `your user id is ${payload?.userId}`
    }


}