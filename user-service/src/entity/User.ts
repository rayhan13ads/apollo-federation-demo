import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';


@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(()=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;

    @Column("int", { default: 0 })
    count: number

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

}