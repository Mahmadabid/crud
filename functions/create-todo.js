const faunadb = require('faunadb'),
  q = faunadb.query;

const handler = async (event, _context, callback) => {

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
  })
  const subject = JSON.parse(event.body);

  await client.query(q.Create(
    q.Collection("todo"),
    {
      data: {
        name: subject.name,
        date: subject.date
      }
    }
  )).then(res => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(res)
    })
  }).catch(err => {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(err)
    })
  })
};

module.exports = { handler }