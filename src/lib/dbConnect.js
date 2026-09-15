import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DBURI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const connect = async (cname) => {
    await client.connect();
    const db = client.db('hero_kidzz')
    return db.collection(cname)
}