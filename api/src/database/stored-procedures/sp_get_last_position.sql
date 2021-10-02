CREATE OR REPLACE FUNCTION sp_get_last_position() 
   RETURNS INTEGER AS
   $BODY$
DECLARE
	err_context TEXT;
    last_position INTEGER;
	reg RECORD;
BEGIN
        SELECT 
            position
        INTO
            last_position
        FROM USERS
        ORDER BY ts_creation DESC
        LIMIT 1;


         RETURN last_position;
 	  
    EXCEPTION WHEN OTHERS THEN
        GET STACKED DIAGNOSTICS err_context = PG_EXCEPTION_CONTEXT;
        RAISE INFO 'Error Name:%',SQLERRM;
        RAISE INFO 'Error State:%', SQLSTATE;
        RAISE INFO 'Error Context:%', err_context;
END
$BODY$ LANGUAGE 'plpgsql';