// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

const bookList = [
  {
    id: 1,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const BookDetails = () => (
  <div>
    {bookList.map((book) => (
      <ul
        key={book.id}
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
      </ul>
    ))}
    <button
      type="submit"
    >
      Comments
    </button>
    <button
      type="submit"
    >
      Remove
    </button>
    <button
      type="submit"
    >
      Edit
    </button>
  </div>
);

export default BookDetails;