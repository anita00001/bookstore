import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/Books/booksSlice';
import '../styles/buttons.css';

const Buttons = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <button
        type="button"
        className="action-btn"
      >
        Comments
      </button>
      <button
        type="button"
        className="action-btn"
        onClick={() => dispatch(removeBook(itemId))}
      >
        Remove
      </button>
      <button
        type="button"
        className="action-btn"
      >
        Edit
      </button>
    </div>
  );
};

Buttons.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Buttons;
