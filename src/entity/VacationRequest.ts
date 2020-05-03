import { Entity, Column, ManyToOne } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";
import { Request } from "./Request";
import { Employee } from "./Employee";
import { VacationType } from "./VacationType";
import { RelationColumn } from "../helper";

@ObjectType()
@Entity()
export class VacationRequest extends Request{

    @Field(() => Int)
    @Column()
    days: number;

    @Field()
    @Column()
    fromDate: Date;

    @Field()
    @Column()
    toDate: Date;

    @Field(() => Employee)
    @ManyToOne(() => Employee)
    employee: Employee;
    @RelationColumn()
    employeeId: number;

    @Field(() => VacationType)
    @ManyToOne(() => VacationType)
    type: VacationType;
    @RelationColumn()
    typeId: number;

    @Field({ nullable: true})
    @Column({default: "inreview"})
    status?: string;
}