import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class LoginResponse {
    @Field()
    success:boolean
    @Field()
    accessToken:string
}