import PropType from 'prop-types';
import '../styles/CompleteStatus.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CompleteStatus = ({ percentage }) => (
  <section className="complete-status">
    <div className="circle">
      <CircularProgressbar value={percentage} />
    </div>
    <div className="status">
      <p>
        {percentage}
        %
      </p>
      <p>Completed</p>
    </div>
  </section>
);

CompleteStatus.defaultProps = {
  percentage: 0,
};

CompleteStatus.propTypes = {
  percentage: PropType.number,
};

export default CompleteStatus;
