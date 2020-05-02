import { Field, InputType, Int } from "type-graphql";

@InputType()
export class VacationRequestInput {
    @Field()
    requestDate: Date

    @Field(() => Int)
    employeeId: number;

    @Field()
    vtype: string;

    @Field(() => Int)
    vamount: number;

    @Field()
    vfromDate: Date;

    @Field()
    vtoDate: Date;
}