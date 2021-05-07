const faunadb = require('faunadb');
const q = faunadb.query;

(async() => {
    const client = new faunadb.Client({secret: Process.env.FAUNADB_SECRET})

    try {
        const result = await client.query(
            q.Create(
                q.Collection("todo"),
                { data: { name: '' } }
            )
        );
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})