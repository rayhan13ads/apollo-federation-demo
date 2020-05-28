import { MiddlewareFn } from "type-graphql";
import { MyContext } from '../../utils/myContext';
import { validAccesstoken } from '../../utils/authVerifyToken';



export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  
    const header = context.req.headers.authorization;
    const token = header.replace('Bearer ', '')
    if (!header) return next()

    const decodedAccessToken = validAccesstoken(token);
    if (decodedAccessToken && decodedAccessToken.userId) {
        context.req.userId = decodedAccessToken.userId;
        return next();
    }
}