import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Employee } from "./Employee";
import { Field, ID, ObjectType, Int } from "type-graphql";

export enum RequestStatus {
    APPROVED = "approved",
    DENIED   = "denied",
    CANCELED = "canceled",
    INRIVIEW = "inreview"
}
@ObjectType()
@Entity()
export class VacationRequest extends BaseEntity{
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    requestDate: Date

    @ManyToOne(() => Employee, employee => employee.vacationRequests)
    employee: Employee;

    @Field()
    @Column()
    vtype: string;

    @Field(() => Int)
    @Column()
    vamount: number;

    @Field()
    @Column()
    vfromDate: Date;

    @Field()
    @Column()
    vtoDate: Date;

    @Field({nullable: true, defaultValue: RequestStatus.INRIVIEW})
    @Column()
    status: string;
}