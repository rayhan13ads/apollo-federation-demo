import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../entity/User';
import { hash } from 'bcryptjs';

@Resolver()
export class RegisterResolver {
    @Mutation(() => Boolean)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string
    ): Promise<boolean> {

        const hashPassword = await hash(password, 12)

        try {     
            await User.insert({
                email,
                password: hashPassword
            })
            return true
        } catch (error) {
            console.log(error);
            return false
        }


    }
}