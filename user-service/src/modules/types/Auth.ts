import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
export const createAccessToken = (user:User) =>{
    return sign(
        { userId: user.id },
        process.env.ACCESSTOKEN!,
        {
            algorithm: "HS256",
            expiresIn: '15m'
        }
    )
}
export const createRefreshToken = (user:User) =>{
    return sign(
        { userId: user.id, tokenVersion:user.tokenVersion },
        process.env.REFRESHTOKEN!,
        {
            algorithm: "HS256",
            expiresIn: '7d'
        }
    )
}