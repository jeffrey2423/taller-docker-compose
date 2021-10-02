CREATE OR REPLACE FUNCTION sp_insert_fake_data(in_datos JSON)
    RETURNS void AS
    $BODY$
	DECLARE
		err_context TEXT;
    BEGIN

        INSERT INTO USERS(
            position,
            name,
            lastname,
            identification,
            email,
            profile_picture
        )
        SELECT
            position,
            name,
            lastname,
            identification,
            email,
            profile_picture
        FROM json_to_record(in_datos) AS x( 
            position INTEGER,
            name TEXT,
            lastname TEXT,
            identification TEXT,
            email TEXT,
            profile_picture TEXT
        );

        EXCEPTION WHEN OTHERS THEN
            GET STACKED DIAGNOSTICS err_context = PG_EXCEPTION_CONTEXT;
            RAISE INFO 'Error Name:%',SQLERRM;
            RAISE INFO 'Error State:%', SQLSTATE;
            RAISE INFO 'Error Context:%', err_context;

    END
$BODY$ LANGUAGE 'plpgsql'