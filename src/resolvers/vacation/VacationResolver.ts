import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { VacationRequest } from "../../entity/VacationRequest";
import { VacationRequestInput } from "./VacationRequestInput";
import { VacationType } from "../../entity/VacationType";
import { VacationTypeInput } from "./VacationTypeInput";
import { Employee } from "../../entity/Employee";

@Resolver()
export class VacationResolver {
    @Query(() => [VacationRequest])
    async vacationRequests() {
        return await VacationRequest.find({relations: ["employee"]});
    }
    @Query(() => [VacationType])
    async vacationTypes() {
        return await VacationType.find();
    }
    @Mutation(() => VacationType)
    async createVacationType(
        @Arg("input") input: VacationTypeInput
    ) {
       return await VacationType.create(input).save();
    }
    @Mutation(() => VacationRequest)
    async createVacationRequest(
        @Arg("input") input: VacationRequestInput
    ) {
        const employee = await Employee.findOne({id: input.employeeId});
        if(!employee) {
            throw new Error("Employee Id not found, please verify");
        }

        const vacationType = await VacationType.findOne({id: input.typeId});
        if(!vacationType) {
            throw new Error("Vacation Type Id not valid, please verify");
        }
        console.log(employee);
        // console.log(vacationType);
        const vacationRequest = await VacationRequest.create({
            date: input.date,
            days: input.days,
            fromDate: input.fromDate,
            toDate: input.toDate,
            employee: employee,
            type: vacationType
        }).save();

        return vacationRequest;
    }
}