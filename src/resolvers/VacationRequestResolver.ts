import { Resolver, FieldResolver, Root } from "type-graphql";
import { VacationRequest } from "../entity/VacationRequest";
import { VacationType } from "../entity/VacationType";

@Resolver(() => VacationRequest)
export class VacationRequestResolver {
    @FieldResolver()
    async type(@Root() vacationRequest: VacationRequest) {
        return await VacationType.findOne({id: vacationRequest.typeId});
    }
}