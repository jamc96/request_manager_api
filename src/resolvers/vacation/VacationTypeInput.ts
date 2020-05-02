import { InputType, Field } from "type-graphql";


@InputType()
export class VacationTypeInput {
    
    @Field()
    name: string;

    @Field()
    description?: string;
}