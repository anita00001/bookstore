import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/booksSlice';
import '../styles/InputBook.css';

const InputBook = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    const newBookItem = {
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    };
    dispatch(addBook(newBookItem));
    setNewBook({
      title: '',
      author: '',
      category: 'Fiction',
    });
  };

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="input-container">
      <section className="add-book-section">
        <h2>ADD NEW BOOK</h2>
        <form className="new-entry">
          <input
            type="text"
            onChange={handleChange}
            value={newBook.title}
            name="title"
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            value={newBook.author}
            onChange={handleChange}
            name="author"
            placeholder="Author"
            required
          />
          <button
            type="button"
            onClick={handleClick}
          >
            Add Book
          </button>
        </form>
      </section>
    </div>
  );
};
export default InputBook;
