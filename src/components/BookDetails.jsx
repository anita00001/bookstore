// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

import { useSelector } from 'react-redux';
import Buttons from './buttons';

const BookDetails = () => {
  const bookList = useSelector((state) => state.books);

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
