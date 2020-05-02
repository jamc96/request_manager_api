import { Field, ID, ObjectType } from "type-graphql";
import { Entity, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { User } from "./User";
import { Vacation } from "./Vacation";
import { VacationRequest } from "./VacationRequest";

@Entity()
@ObjectType()
export class Employee extends BaseEntity {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => User)
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
    
    @Field(() => Vacation, { nullable: true, defaultValue: []})
    @OneToMany(() => Vacation, vacation => vacation.employee,{
        cascade: true,
    })
    vacations?: Vacation[];

    @Field(() => VacationRequest, { nullable: true, defaultValue: []})
    @OneToMany(() => VacationRequest, vacationreq => vacationreq.employee, {
        cascade: true
    })
    vacationRequests?: VacationRequest[];

}