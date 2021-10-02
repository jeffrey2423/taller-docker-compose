const fakerController = {};

const faker = require('faker');

const connection = require('../database/connection');

fakerController.GetUsers = async (req, res) =>{
    try {
        let query = {
            text: `SELECT * FROM sp_get_users()`
        };
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {
                    res.status(400).json({
                        error: "Ocurrio un error al intentar obtener los usuarios",
                        descError: err.message
                    });
                } else {
                    await client.query(query, async (err, results) => {
                        if (err) {
                            await client.query("ROLLBACK");
                            res.status(400).json({
                                error: "Ocurrio un error al intentar obtener los usuarios",
                                descError: err.message
                            });
                        } else {
                            res.status(200).json(results.rows);
                        }
                    });
                }
            } finally {
                done();
                query = {};
            }
        });
    } catch (err) {
        res.status(400).json({
            error: "Ocurrio un error al intentar obtener los usuarios",
            descError: err.message
        });
    }
}

fakerController.InsertFakeData = async (req, res) =>{
    try {
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {
                    res.status(400).json(err.message);
                } else {
                    let positionTemp = req.body.position
                    for (let i = 0; i < 13; i++) {

                        let datos = {
                            position: positionTemp + i,
                            name:faker.name.firstName(),
                            lastname: faker.name.lastName(),
                            identification: faker.phone.phoneNumber(),
                            email: faker.internet.email(),
                            profile_picture: faker.image.avatar()
                        }

                        let query = {
                            text: "select * from sp_insert_fake_data($1)",
                            values: [datos]
                        };

                        await client.query(query, async (err, results) => {
                            if (err) {
                                throw new Error(err.message);
                            }
                        });
                    }

                    res.status(400).json("Datos Creados con exito");
                }
            } finally {
                done();
                ind_error = false;
                message_error = "";
            }
        });

    } catch (err) {
        res.status(400).json({
            error: "Ocurrio un error al tratar de insertar los datos",
            descError: err.message
        });
    }
}

fakerController.GetLastPosition = async (req, res) =>{
    try {
        let query = {
            text: `SELECT * FROM sp_get_last_position()`
        };
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {

                } else {
                    await client.query(query, async (err, results) => {
                        if (err) {

                        } else {
                            res.status(200).json({
                                position: results.rows[0].sp_get_last_position
                            });
                        }
                    });
                }
            } finally {
                done();
                query = {};
            }
        });
    } catch (err) {

    }
}

fakerController.DeleteAll = async (req, res) =>{
    try {
        let query = {
            text: `DELETE FROM USERS`
        };
        await connection.connect(async (err, client, done) => {
            try {
                if (err) {
                    res.status(400).json({
                        error: "Ocurrio un error al tratar de eliminar los datos",
                        descError: err.message
                    });
                } else {
                    await client.query(query, async (err, results) => {
                        if (err) {
                            res.status(400).json({
                                error: "Ocurrio un error al tratar de eliminar los datos",
                                descError: err.message
                            });
                        } else {
                            res.status(200).json("Datos eliminados con exito");
                        }
                    });
                }
            } finally {
                done();
                query = {};
            }
        });
    } catch (err) {
        res.status(400).json({
            error: "Ocurrio un error al tratar de eliminar los datos",
            descError: err.message
        });
    }
}


module.exports = fakerController;