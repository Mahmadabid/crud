const faunadb = require("faunadb"),
  q = faunadb.query;

require('dotenv').config();

const handler = async (_event, _context, callback) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
  });
  await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("todo_list"))),
      q.Lambda((x) => q.Get(x))
    )
  ).then(data => data.data.map(d => {
      return {
        data: d.data,
        id: d.ref.id
      }
  }))
    .then((res) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      });
    })
    .catch((err) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(err),
      });
    });
};

module.exports = { handler };