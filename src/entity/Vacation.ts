import { ObjectType, Field, Int, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm"
import { Employee } from "./Employee";
import { VacationType } from "./VacationType";
import { RelationColumn } from "../helper";
@ObjectType()
@Entity()
export class Vacation extends BaseEntity {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => VacationType)
    @ManyToOne(() => VacationType)
    type: VacationType;
    @RelationColumn()
    typeId: number;

    @Field(() => Int)
    @Column()
    amount: number;

    @ManyToOne(() => Employee)
    employee: Employee;
    @RelationColumn()
    employeeId: number;

}