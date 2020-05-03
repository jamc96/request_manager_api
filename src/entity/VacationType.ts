import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { VacationRequest } from "./VacationRequest";
import { Vacation } from "./Vacation";

@ObjectType()
@Entity()
export class VacationType extends BaseEntity {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field({nullable: true})
    @Column()
    description?: string

    @Field(() => VacationRequest)
    @OneToMany(() => VacationRequest, vrequest => vrequest.type)
    vacationRequests: VacationRequest[];

    @Field(() => Vacation)
    @OneToMany(() => Vacation, vacation => vacation.type)
    vacations: Vacation[];

}