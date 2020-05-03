import { Query, Resolver, Arg, Mutation, FieldResolver, Root } from "type-graphql";
import { User } from "../entity/User";
import { EmployeeInput } from "./types/EmployeeInput";
import { Employee } from "../entity/Employee";
import { VacationRequest } from "../entity/VacationRequest";
import { Vacation } from "../entity/Vacation";

@Resolver(() => Employee)
export class EmployeeResolver {
    @Query(() => [User]) 
    async users(): Promise<User[]> {
        return await User.find();
    }

    @Query(() => [User])
    async userByStatus(
        @Arg("isActive") isActive: boolean
    ): Promise<User[]> {
        return await User.find({isActive: isActive});
    }

    @Query(() => User) 
    async userById(
        @Arg("id") id: number
    ){
        return await User.findOne({id: id});
    }

    @Query(() => [Employee])
    async employees(): Promise<Employee[]> {
        return await Employee.find(
            { relations:["user"]}
        );
    }
    
    @Query(() => Employee)
    async employeeById(
        @Arg("id") id: number
    ){
        return await Employee.findOne(
            { id:id },
            { relations:["user"] }
        );
    }

    @Mutation(() => Employee)
    async createEmployee(
        @Arg("input") input: EmployeeInput
    ) {
        const userExist = await this.userById(input.userId);
        if(!userExist) {
            throw new Error('User not found, please verify');
        }

        if(userExist.isActive) {
            throw new Error('User account already linked to employee');
        }
        // update user status
        await User.update({id: input.userId},{isActive:true});
        // create new employee
        const employee = await Employee.create({
            user: userExist,
            vacationsAvailable: input.vacations
        }).save();
        
        return employee;
    }

    @FieldResolver()
    async vacationRequests(@Root() employee: Employee) {
        return await VacationRequest.find({where: { employeeId: employee.id}});
    }

    @FieldResolver()
    async vacationsAvailable(@Root() employee: Employee) {
        return await Vacation.find({where: { employeeId: employee.id}});
    }

}