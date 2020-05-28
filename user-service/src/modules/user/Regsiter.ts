import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from '../../entity/User';
import { RegisterInput } from '../input-types/registerInput';
import * as bcrypt from 'bcryptjs'
@Resolver()
export class RegisterResolver{

    @Mutation(()=> User)
    async register(
        @Arg("data"){name,email,password}:RegisterInput
    ):Promise<User>{

        const hashPassword = await bcrypt.hash(password,12)

        const user = await User.create({
            name,
            email,
            password:hashPassword
        }).save()

        return user
    }


}