import dotenv from 'dotenv';
import Server from './models/server.js';
//Configurar dotenv
dotenv.config();
const server = new Server();
server.listen();
//# sourceMappingURL=app.js.map