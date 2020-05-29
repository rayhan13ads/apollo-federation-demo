import { Resolver, Mutation, Arg, Ctx, Int } from 'type-graphql'
import { User } from '../../entity/User';
import { compare } from 'bcryptjs';
import { LoginResponse } from '../types/LoginResponse';
import { sign } from 'jsonwebtoken';
import { MyContext } from '../types/MyContext';
import { createRefreshToken, createAccessToken } from '../types/Auth';
import { getConnection } from 'typeorm';

@Resolver()
export class LoginResolver {
    @Mutation(() => LoginResponse)
    async login(
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Ctx() { req, res }: MyContext
    ): Promise<LoginResponse> {

        const user = await User.findOne({ where: { email } })

        if (!user) {
            throw new Error('could not find user')
        }

        const valid = await compare(password, user.password)

        if (!valid) {
            throw new Error('bad password')
        }

        res.cookie('jid', createRefreshToken(user), { httpOnly: true })

        return {
            success:true,
            accessToken: createAccessToken(user)

        }

    }

    @Mutation(() => Boolean)
    async revokeRefreshTokenForUser(@Arg('userId', () => Int) userId: number): Promise<boolean> {
        try {
            await getConnection().getRepository(User).increment({ id: userId }, "tokenVersion", 1)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }



}