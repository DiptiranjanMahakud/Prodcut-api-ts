import pgPromise from 'pg-promise';
//pgPromise: This is the name you are giving to the imported module. In this case, it is the pg-promise library.
//from 'pg-promise': This part specifies the module you want to import, which is the pg-promise library.


const pg = pgPromise({});
//pgPromise: This refers to the pg-promise library, which is typically a function that can be invoked to create a new instance of the library.
//{}: This is an empty configuration object being passed as an argument to the pgPromise function. In this case, an empty configuration likely means that you are using the default configuration settings provided by pg-promise.
//const pg: This line declares a constant variable named pg to store the instance of pg-promise that is created.



export const db = pg("postgres://postgres:dipti@localhost:5432/students");
pg("postgres://postgres:dipti@localhost:5432/students"); //This part invokes the pg function, which is presumably an instance of the pg-promise library, with a PostgreSQL connection URL.

//"postgres://postgres:dipti@localhost:5432/students": This is a connection URL that includes the necessary details to connect to a PostgreSQL database. It specifies the username (postgres), password (dipti), host (localhost), port (5432), and the name of the database (students).