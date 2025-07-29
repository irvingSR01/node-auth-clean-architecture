import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user-mapper";


type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ) {}


    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        
        const { name, email, password } = registerUserDto;

        try {


            // 1. verificar si el correo existe
            const emailExist = await UserModel.findOne({ email: email });

            if (emailExist) throw CustomError.badRequest('User already exists'); // maybe change to more generic error

            // 2. hash de password
            const user = await UserModel.create({
                name: name,
                email: email,
                password: this.hashPassword(password),
            });

                        
            await user.save();
            
            // todo: mappear la respuesta
            return UserMapper.userEntityFromObject(user);
            
            
        } catch(error) {

            if ( error instanceof CustomError ) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }



}