import { ObjectType, Directive, Field, ID } from 'type-graphql';
import { Review } from '../../entity/Review';

@Directive("@extends")
@Directive(`@key(fields:"id")`)
@ObjectType()
export class User{
    @Directive("@external")
    @Field(type=>ID)
    id:number
    
}