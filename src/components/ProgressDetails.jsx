// Books
// |-- BookCard
// |   |-- BookDetails
// |   |-- CompleteStatus
// |   |-- ProgressDetails
// |-- InputBook

import PropType from 'prop-types';
import '../styles/ProgressDetails.css';

const ProgressDetails = ({ chapter }) => {
  const chapterNumber = chapter || 1;
  return (
    <section className="progress-details">
      <div className="chapter">
        <p>Current Chapter</p>
        <p>
          Chapter
          {' '}
          {chapterNumber}
        </p>
      </div>
      <button type="button">Update Progress</button>
    </section>
  );
};

ProgressDetails.defaultProps = {
  chapter: 1,
};

ProgressDetails.propTypes = {
  chapter: PropType.number,
};

export default ProgressDetails;