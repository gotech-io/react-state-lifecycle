import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const IntervalCounter = ({ intervalMilliseconds, shouldRun }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldRun) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, intervalMilliseconds);

      return () => {
        console.log('clearing interval');
        clearInterval(timer);
      };
    }
  }, [intervalMilliseconds, shouldRun]);

  return <h3>Count: {count}</h3>;
};

IntervalCounter.propTypes = {
  intervalMilliseconds: PropTypes.number.isRequired,
  shouldRun: PropTypes.bool.isRequired,
};

IntervalCounter.defaultProps = {
  intervalMilliseconds: 1000,
};

export default IntervalCounter;
