import { Sequelize } from 'sequelize';
const database = new Sequelize('node-typescript', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false - Esto muestra las consultas de la bd en la consola, para aprender lo dejamos en true por defecto
});
export default database;
//# sourceMappingURL=connection.js.map