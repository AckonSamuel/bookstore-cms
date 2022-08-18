import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './redux/books/books';
import BookList from './components/BookList';
import './App.css';
import Form from './components/Form';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="sub-root">
      <BookList />
      <Form />
    </div>
  );
};

export default App;
