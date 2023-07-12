// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

const InputBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input
        placeholder="Book Title"
      />
      <input
        placeholder="Author"
      />
      <button
        type="submit"
      >
        Add Book
      </button>
    </form>
  </div>
);

export default InputBook;
