import { Field, InputType, Int } from "type-graphql";
import { VacationTypeInput } from "./VacationTypeInput";

@InputType()
export class VacationInput {
    @Field(() => VacationTypeInput)
    type: VacationTypeInput;

    @Field(() => Int)
    amount: number;
}