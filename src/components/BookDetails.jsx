import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/Books/booksSlice';
import Buttons from './buttons';
import CompleteStatus from './CompleteStatus';
import ProgressDetails from './ProgressDetails';
import '../styles/BookDetails.css';

const BookDetails = () => {
  const bookList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="card">
      {bookList.map((book) => (
        <section key={book.item_id} className="book-card">
          <ul
            key={book.item_id}
          >
            <li className="category">
              {book.category}
            </li>
            <li className="title">
              {book.title}
            </li>
            <li className="author">
              {book.author}
            </li>
            <Buttons itemId={book.item_id} />
          </ul>
          <CompleteStatus percentage={Math.floor(Math.random() * 101)} />
          <ProgressDetails chapter={Math.floor(Math.random() * 21)} />
        </section>
      ))}
    </div>
  );
};

export default BookDetails;
