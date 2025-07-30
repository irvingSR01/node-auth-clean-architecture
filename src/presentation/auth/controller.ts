import { Request, Response as Response } from 'express';
import { AuthRepository, CustomError, RegisterUserDto } from '../../domain';
import { JWTAdapter } from '../../config';
import { UserModel } from '../../data/mongodb';

export class AuthController {

    constructor(
        private readonly authRepository: AuthRepository,
    ) { }

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.error(error); // Log with Winston or similar logger
        return res.status(500).json({ error: 'Internal Server Error' });
        
    }

    registerUser = (req: Request, res: Response) => {
        const [ error, registerUserDto ] = RegisterUserDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        this.authRepository.register( registerUserDto! )
            .then( async (user) => {
                res.json({
                    user,
                    token: await JWTAdapter.generateToken({ id: user.id })
                })
            })
            .catch( error => this.handleError(error, res) );

    }

    loginUser = (req: Request, res: Response) => {
        res.json('LoginUser Controller')
    }



    getUsers = (req: Request, res: Response) => {

        UserModel.find()
            .then( users => {
                res.json({
                    users,
                    token: req.header("Authorization")
                })
            } )
            .catch( () => res.status(500).json({ error: "Internal Server Error" }));
        
    }
    
    
}