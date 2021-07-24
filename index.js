import { Database, aql } from 'arangojs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000
const db = new Database();

app.use(express.static('./bundle'))
app.get('/', (req, res) => {
    res.sendFile(dirname(fileURLToPath(import.meta.url)) + '/bundle/index.html')
})

app.get('/api/now', (req, res) => {
    fetchNow().then(result => res.send({ value: result }));
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
