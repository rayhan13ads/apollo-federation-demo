import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, Directive } from "type-graphql";
import { User } from '../modules/user/User';


@Directive(`@key(fields:"id")`)
@ObjectType()
@Entity()
export class Product extends BaseEntity {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    price: number;
    
    @Field(()=> User,{name:"user"})
    @Column()
    userId: number;
}