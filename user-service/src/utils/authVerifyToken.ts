import { verify } from 'jsonwebtoken'


export interface decodeJwt {
    userId: string,
    conut: number
}

export const validAccesstoken = (token: string) => {
    try {
        const decode: any = verify(token, `${process.env.jwtSecret}`)
        if (decode.us) {
            
        }
        const decodeValue: decodeJwt = { userId: decode.userId, conut: 0 }
        return decodeValue
    } catch (error) {
        return null
    }
}
export const validRefreshtoken = (token: string) => {
    try {
        const decode: any = verify(token, `${process.env.jwtSecret}`)
        const decodeValue: decodeJwt = { userId: decode.userId, conut: decode.count }
        return decodeValue
    } catch (error) {
        return null
    }
}