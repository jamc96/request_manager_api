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
    
    @Field(() => [Vacation])
    @OneToMany(() => Vacation, vacation => vacation.employee,{ cascade: ["insert"] })
    vacationsAvailable?: Vacation[];

    @Field(() => [VacationRequest])
    @OneToMany(() => VacationRequest, vrequest => vrequest.employee,{ cascade: ["insert"]})
    vacationRequests?: VacationRequest[]

}