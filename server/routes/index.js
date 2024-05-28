import express from 'express';
import db from '../database.js';
import { v4 as uuidv4 } from 'uuid';

var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  await db.update(({users}) => users.push({
    id: uuidv4(),
    username: "test",
    password: "test",
    role: "test"
  }))
  
  res.json(db.data.users);
});

export default router;
