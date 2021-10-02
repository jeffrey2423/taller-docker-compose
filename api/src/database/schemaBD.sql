CREATE TABLE USERS(
    ts_creation TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    row_id SERIAL NOT NULL,
    position INTEGER NOT NULL,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL,
    identification TEXT NOT NULL,
    email TEXT NOT NULL,
    profile_picture TEXT NOT NULL,
    CONSTRAINT USERS_PK
        PRIMARY KEY (row_id)
);