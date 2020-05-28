import { Field, ObjectType } from 'type-graphql';
import { User } from '../../entity/User';

@ObjectType()
export class TokenRes{
    @Field()
    user:User
    @Field()
    tokenType:string
    @Field()
    accessToken:string
    @Field()
    refreshToken:string
}