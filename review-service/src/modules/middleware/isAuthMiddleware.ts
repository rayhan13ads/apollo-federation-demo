import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { MyContext } from '../types/MyContext';
import { verify } from "jsonwebtoken";

export const isAuthMiddleware:MiddlewareFn<MyContext> =({context},next)=>{

   
    
    const authorization = context.req.headers['authorization']

    if (!authorization) {
        throw new Error('not Authenticated')
    }

    try {
        const token = authorization?.split(' ')[1]
        const payload = verify(token,process.env.ACCESSTOKEN!)
        context.payload = payload as any
    } catch (err) {
        console.log(err);
        throw new Error('not Authenticated')        
    }

    return next()
}