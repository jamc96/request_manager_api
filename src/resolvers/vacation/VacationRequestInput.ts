import { Field, InputType, Int } from "type-graphql";

@InputType()
export class VacationRequestInput {
    @Field({nullable: true, defaultValue: new Date()})
    date: Date

    @Field(() => Int)
    days: number;
    
    @Field()
    fromDate: Date

    @Field()
    toDate: Date

    @Field()
    employeeId: number;

    @Field()
    typeId: number;
}