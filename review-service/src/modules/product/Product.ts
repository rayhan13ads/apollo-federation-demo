import { ObjectType, Directive, Field, ID } from 'type-graphql';
import { User } from "../user/User";
import { Review } from '../../entity/Review';



@Directive("@extends")
@Directive(`@key(fields:"id")`)
@ObjectType()
export class Product{
    @Directive("@external")
    @Field(type=>ID)
    id:number

}