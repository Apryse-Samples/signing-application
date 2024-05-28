import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { v4 as uuidv4 } from 'uuid';

const defaultData = {
    users: [{
        id: uuidv4(),
        username: "admin",
        password: "admin",
        role: "admin"
    }] 
};
 
const db = new Low(new JSONFile('./server/database.json'), defaultData);

export default db;