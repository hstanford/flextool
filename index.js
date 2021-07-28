import { Database, aql } from 'arangojs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import passport from 'passport';
import Strategy from 'passport-local';

const app = express()
const port = 3000
const db = new Database();

app.use(express.static('./bundle'))
app.get('/', (req, res) => {
    res.sendFile(dirname(fileURLToPath(import.meta.url)) + '/bundle/index.html')
})

app.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }),
    (req, res) => {
        res.sendStatus(204);
    }
);

app.get('/api/now', (req, res) => {
    fetchNow().then(result => res.send({ value: result }));
})

app.get('/api/users', (req, res) => {
    setTimeout(() => fetchUser('Henry').then(result => res.send({ value: result })), 2000);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function fetchNow() {
    const now = Date.now();
    let result; 
    try {
        const cursor = await db.query(aql`
            RETURN ${now}
        `);
        result = await cursor.next();
    } catch (err) {
        console.log(err);
    }
    return result;
}

async function fetchUser(username) {
    let result; 
    try {
        const cursor = await db.query(aql`
            FOR u IN users
                FILTER u.name == ${username}
                RETURN u
        `);
        result = await cursor.next();
    } catch (err) {
        console.log(err);
    }
    return result;
}
