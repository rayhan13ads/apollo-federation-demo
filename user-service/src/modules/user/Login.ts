import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from '../../entity/User';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'
import { MyContext } from '../../utils/myContext';
import { TokenRes } from '../types/TokenRes';
import SetJwtToken  from '../../utils/setJwtToken';
import { Tokens } from '../../utils/setJwtToken';



@Resolver()
export class LoginResolver {
    @Mutation(() => TokenRes)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: MyContext
    ): Promise<TokenRes> {

        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw new Error("User not found!");
        }
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            throw new Error("Password dose not match!!")
        }

        const tokens:Tokens = SetJwtToken(user)

        const tokenRes = new TokenRes()
        tokenRes.user =user
        tokenRes.tokenType='Bearer'
        tokenRes.accessToken = tokens.access
        tokenRes.refreshToken = tokens.refresh

        return tokenRes
    }


}