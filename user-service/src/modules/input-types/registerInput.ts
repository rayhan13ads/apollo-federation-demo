import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsEmailExist } from "../../modules/sheared/isEmailExist";

@InputType()
export class RegisterInput{

    @Length(1,255)
    @Field() 
    name: string;

    @IsEmail()
    @Field()
    @IsEmailExist({message:"user already uesed!"})
    email: string;

    @Length(1,20)
    @Field()
    password: string;
}