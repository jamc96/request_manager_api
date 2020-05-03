import { InputType, Field } from "type-graphql";

@InputType()
export class VacationTypeInput {
    
    @Field()
    name: string;

    @Field({nullable: true})
    description?: string;
}