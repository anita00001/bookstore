// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/Books/booksSlice';
import Buttons from './buttons';

const BookDetails = () => {
  const bookList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {bookList.map((book) => (
        <ul
          key={book.item_id}
        >
          <li>
            Category:
            {'  '}
            {book.category}
          </li>
          <li>
            Book Title:
            {'  '}
            {book.title}
          </li>
          <li>
            Book Author:
            {'  '}
            {book.author}
          </li>
          <Buttons itemId={book.item_id} />
        </ul>
      ))}
    </div>
  );
};

export default BookDetails;
