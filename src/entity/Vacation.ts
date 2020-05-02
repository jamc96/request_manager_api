import { ObjectType, Field, Int, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Employee } from "./Employee";
@ObjectType()
@Entity()
export class Vacation {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    type: string

    @Field(() => Int)
    @Column()
    amount: number;

    @ManyToOne(() => Employee, employee => employee.vacations)
    employee: Employee;
}