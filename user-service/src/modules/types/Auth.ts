import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
export const createAccessToken = (user:User) =>{
    return sign(
        { userId: user.id },
        process.env.ACCESSTOKEN!,
        {
            expiresIn: '15m'
        }
    )
}
export const createRefreshToken = (user:User) =>{
    return sign(
        { userId: user.id, tokenVersion:user.tokenVersion },
        process.env.REFRESHTOKEN!,
        {
            expiresIn: '7d'
        }
    )
}