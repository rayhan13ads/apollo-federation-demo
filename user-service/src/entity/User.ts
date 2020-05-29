import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, Directive } from "type-graphql";


@Directive(`@key(fields:"id")`)
@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

    @Column("int",{default:0})
    tokenVersion:number

}

