import { Resolver, Query, Ctx, UseMiddleware, Mutation } from "type-graphql";
import { User } from '../../entity/User';
import { MyContext } from '../types/MyContext';
import { LoginResponse } from '../types/LoginResponse';
import { verify } from "jsonwebtoken";
import { sendRefreshToken } from '../types/sendRefreshToken';
import { createRefreshToken } from '../types/Auth';

@Resolver()
export class RefreshTokenResolver{

    @Mutation(()=>LoginResponse)
    async createRefreshToken(@Ctx() {req,res}:MyContext):Promise<LoginResponse>{
        console.log(req.cookies);
        
        const token = req.cookies.jid
       
        
        if (!token) {
            return {success:false, accessToken:''}
        }
        let payload:any = null
        try {
            payload = verify(token,process.env.REFRESHTOKEN!)
        } catch (error) {
            console.log(error);
            return {success:false, accessToken:''}
        }

        const user = await User.findOne({id:payload.userId})
        if (!user) {
            return {success:false, accessToken:''}
        }
        if (user.tokenVersion !== payload.tokenVersion) {
            return {success:false, accessToken:''}
        }
        sendRefreshToken(res,createRefreshToken(user))
        return {success:false, accessToken:createRefreshToken(user)}
    }
    
    

}