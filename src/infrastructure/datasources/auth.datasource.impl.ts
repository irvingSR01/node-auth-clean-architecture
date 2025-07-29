import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";




export class AuthDatasourceImpl implements AuthDatasource {


    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        
        const { name, email, password } = registerUserDto;

        try {


            // 1. verificar si el correo existe
            
            // 2. hash de password

            // 3. Mappear la respuesta a nuestra entidad
            
            // 4. Guardarla en base de datos

            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE'],
            );
            
            
        } catch(error) {

            if ( error instanceof CustomError ) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }



}