module.exports = {
    SERVER_PORT: 5000,
    application: {
        cors: {
            server: [
                {
                    origin: "*", //servidor que deseas "localhost:3000" que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }

    },
    DB_CREDENTIALS:{
        HEROKU:{
            user: "xagdroikcsvhks",
            host: "ec2-44-198-146-224.compute-1.amazonaws.com",
            database: "d14sic1c9utl61",
            password: "a65f78ee3e8a24bad0448323c625daeacce4b617cc9b03d9857ca1cb80f8cb5b",
            port:  5432,
            ssl: { rejectUnauthorized: false },
        },
        LOCALHOST:{
            user: "",
            host: "",
            database: "",
            password: "",
            port:  5432
        },
        URI: "postgres://xagdroikcsvhks:a65f78ee3e8a24bad0448323c625daeacce4b617cc9b03d9857ca1cb80f8cb5b@ec2-44-198-146-224.compute-1.amazonaws.com:5432/d14sic1c9utl61"
    }
}