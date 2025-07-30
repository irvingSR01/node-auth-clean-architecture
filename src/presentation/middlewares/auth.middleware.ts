import { NextFunction, Request, Response } from "express";



export class AuthMiddleware {


    static validateJWT = ( req: Request, res: Response, next: NextFunction ) => {

        const authorization = req.header('Authorization');

        if (!authorization) return res.status(401).json({ error: 'No token provided' });

        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer Token' });

        const token = authorization.split(' ').at(1) || '';

        try {

            // todo: hacer el payload de jwt adapter
            // const payload 
        
            console.log(`TOKEN FROM HEADERS ${token}`)
            
            next();
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
    
    
}