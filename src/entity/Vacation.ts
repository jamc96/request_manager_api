import { ObjectType, Field, Int, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Employee } from "./Employee";
import { VacationType } from "./VacationType";
@ObjectType()
@Entity()
export class Vacation {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => VacationType)
    @ManyToOne(() => VacationType, type => type.vacations)
    type: VacationType;

    @Field(() => Int)
    @Column()
    amount: number;

    @ManyToOne(() => Employee, employee => employee.vacationsAvailable)
    employee: Employee;

    
}