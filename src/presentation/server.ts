import express, { Router } from 'express';

interface Options {
    port?: number;
    routes: Router;
}

export default class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) { 
        const { port = 3000, routes } = options;

        this.port = port;
        this.routes = routes;
    }

    async start() {
        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-url-encoded

        // Usar las rutas definidas
        this.app.use( this.routes );

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }

}