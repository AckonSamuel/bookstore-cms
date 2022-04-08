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

const loadBooks = async () => {
  let result = await fetch(`${api}/books`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  result = await result.json();
  console.log(result);
  const bookArr = Object.entries(result.data)
    .map(([id, book]) => ({ ...book[0], id, type: book[0].category }));
  return bookArr;
};

const removeBook = async (id) => {
  const result = await fetch(`${api}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res.status);
  return result;
};

export { saveBook, loadBooks, removeBook };
