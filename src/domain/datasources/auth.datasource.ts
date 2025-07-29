import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDatasource {


    // todo: 
    // abstract login( userLoginDto: UserLoginDto ): Promise<UserEntity>;

    abstract register( registerUserDto: RegisterUserDto ): Promise<UserEntity>;
    
    
}