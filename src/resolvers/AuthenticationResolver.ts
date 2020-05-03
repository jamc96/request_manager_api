import { Resolver, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "./types/RegisterInput";
import { User } from "../entity/User";
import bcrypt from "bcryptjs";
import { LoginInput } from "./types/LoginInput";

@Resolver()
export class AuthenticationResolver {
    
    @Mutation(() => User)
    async register(
        @Arg("input") {firstName,lastName,email, password}: RegisterInput
    ): Promise<User> { 
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save();

        return user;
    }
    @Mutation(() => User)
    async login(
        @Arg("input"){email, password}: LoginInput
    ): Promise<User> {
        const user = await User.findOne({email: email});

        if(!user) {
            throw new Error('User not found');
        }

        const valid = await bcrypt.compare(password,user.password);
        
        if(!valid){
            throw new Error('Not valid password');
        }

        return user;
    }
}