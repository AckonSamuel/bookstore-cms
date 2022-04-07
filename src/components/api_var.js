const appId = 'jJNxznO6whEuCrcGj1r6';
const api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

const saveBook = async ({
  id, title, type, author,
}) => {
  const result = await fetch(`${api}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id, title, author, category: type,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return result;
};
