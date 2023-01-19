import express, { Application } from 'express';
import cors from 'cors'
import userRoute from '../routes/usuarios.js';
import database from '../database/connection.js';


class Server {

    private app: Application;
    private port: string;
    private routesPath =  {
        usuariosPath: '/api/usuarios',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        
        //Base de Datos
        this.dbConnect();

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();    
    }

    middlewares() { 
        //CORS
        this.app.use( cors() );

        //Lectura del body - SIN ESTO NO LLEGAN LOS BODY
        this.app.use( express.json() );

        //Carpeta publica
        this.app.use( express.static('public') );
    }

    routes() {
        const { usuariosPath } = this.routesPath;

        this.app.use( usuariosPath, userRoute );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port }`);
        } )
    }
    
    async dbConnect() {

        try {

            await database.authenticate();

            console.log('Base de datos Online');
            
        } catch ( error: any ) {
            throw new Error( error );
        }

    }


}

export default Server;