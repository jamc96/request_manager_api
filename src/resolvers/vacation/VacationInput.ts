import { Field, InputType, Int } from "type-graphql";

@InputType()
export class VacationInput {
    @Field()
    type: string;

    @Field(() => Int)
    amount: number;
}