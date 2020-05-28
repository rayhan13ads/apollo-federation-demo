import {sign} from 'jsonwebtoken'
import { User } from '../entity/User'

export interface Tokens {
    access :string
    refresh:string
}

 function SetJwtToken (user:User):Tokens{

    const expireDay = 60 * 60 * 24 * 7 * 1000 // 7days
    const expireMin = 60 * 15 * 1000 //15min


    const refreshToken = sign({ userId: user.id, count: user.count }, `${process.env.jwtSecret}`, {
        expiresIn: expireDay
    })
    const accessToken = sign({ userId: user.id}, `${process.env.jwtSecret}`, {
        expiresIn: expireMin
    })

    const tokens:Tokens ={access: accessToken, refresh: refreshToken } 
    
    return  tokens


}

export default SetJwtToken