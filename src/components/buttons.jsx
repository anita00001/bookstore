import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/Books/booksSlice';

const Buttons = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
      >
        Comments
      </button>
      <button
        type="button"
        onClick={() => dispatch(removeBook(itemId))}
      >
        Remove
      </button>
      <button
        type="button"
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
