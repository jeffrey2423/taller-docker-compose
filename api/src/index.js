const app = require('./app');
const connection = require('./database/connection');

const main = () => {
    try {
        app.listen(app.get('port'));
        console.log(`Servidor en el puerto: ${app.get('port')}`);
        connection.connect((err, client, done) => {
            done();
        })
    } catch (error) {
        console.log(error)
    }

}
main();