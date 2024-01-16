import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://postgres:dipti@localhost:5432/postgres");