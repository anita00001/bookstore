// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

import BookDetails from './BookDetails';
import '../styles/BookCard.css';

const BookCard = () => (
  <div className="card">
    <BookDetails />
  </div>
);

export default BookCard;
