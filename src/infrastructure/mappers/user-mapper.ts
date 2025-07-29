import { CustomError, UserEntity } from "../../domain";


export class UserMapper {
  

    static userEntityFromObject(object: { [key: string]: any}) {

        const { id, _id, name, email, password, roles } = object;

        if(!_id || !id) throw CustomError.badRequest('Invalid user object');

        if (!name) throw CustomError.badRequest('Missing user name');
        if (!email) throw CustomError.badRequest('Missing user email');
        if (!password) throw CustomError.badRequest('Missing user password');
        if (!roles) throw CustomError.badRequest('Missing user roles');

        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles
        );
    }
    
    
}




