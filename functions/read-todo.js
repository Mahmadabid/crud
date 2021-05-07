const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIl2ddkACDW5t6OjNHrCMcOP2UOfxq1ctMPq7" })

    try {
        const result = await client.query(q.Paginate(q.Match(q.Ref('indexes/todo_list'))))
    .then((response) => {
      const todoRefs = response.data

      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref)
      })

      return client.query(getAllTodoDataQuery).then((ret) => {
        return {
          body: JSON.stringify(ret)
        }
      })
      })
      return result;
    } catch (error) {
        console.log('213',error);
    }
})();