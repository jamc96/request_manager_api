import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { VacationRequest } from "../../entity/VacationRequest";
import { VacationRequestInput } from "./VacationRequestInput";
import { VacationType } from "../../entity/VacationType";
import { VacationTypeInput } from "./VacationTypeInput";

@Resolver()
export class VacationResolver {
    @Query(() => [VacationRequest])
    async vacationRequests() {
        return await VacationRequest.find();
    }
    
    @Mutation(() => VacationRequest)
    async createVacationReques(
        @Arg("input") input: VacationRequestInput
    ) {
        
        return input;
    }
    @Mutation(() => [VacationType])
    async createVacationType(
        @Arg("input") input: VacationTypeInput
    ) {
       return input;
    }
}