import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
@Entity()
export class Review extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    body: string;

    @Field()
    @Column()
    userId: string;

    @Field()
    @Column()
    productId: string;

}