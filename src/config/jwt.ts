import jwt from 'jsonwebtoken';

type TokenDuration = jwt.SignOptions['expiresIn'];

export class JWTAdapter {
    
    static async generateToken(
        payload: Object,
        duration: TokenDuration = '2h'
    ): Promise<string | null> {

        return new Promise( ( resolve ) => {

            // todo: generacion del seed
            
            
            jwt.sign( payload, 'SEED', { expiresIn: duration }, (err, token) => {

                if ( err ) return resolve(null);

                resolve(token!);
                
            })
        })
        
    }


}