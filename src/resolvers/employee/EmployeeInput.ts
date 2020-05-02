import { InputType, Field } from "type-graphql";
import { VacationInput } from "../vacation/VacationInput";

@InputType()
export class EmployeeInput   {
    @Field()
    userId: number;

    @Field(() => [VacationInput], { nullable: true, defaultValue: []})
    vacations?: VacationInput[];
}