import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Product } from "../modules/product/Product";
import { User } from "../modules/user/User";
import { Type } from "class-transformer";



@ObjectType()
@Entity()
export class Review extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    body: string;

   
    @Field(()=> User,{name:"user"})
    @Column()
    userId: number;

   
    @Field(()=> Product,{name:"product"})
    @Column()
    productId: number;

}