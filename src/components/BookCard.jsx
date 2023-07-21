// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

import BookDetails from './BookDetails';
// import CompleteStatus from './CompleteStatus';
// import ProgressDetails from './ProgressDetails';

const BookCard = () => (
  <div>
    <BookDetails />
    {/* <CompleteStatus />
    <ProgressDetails /> */}
  </div>
);

export default BookCard;
