import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FetchDataComponent = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setTimeout(() => {
        setData(json);
        setLoading(false);
      }, 5000);
    };

    fetchData();
  }, [url]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <textarea
      readOnly
      rows={10}
      cols={50}
      value={JSON.stringify(data, null, 2)}
    />
  );
};

FetchDataComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

FetchDataComponent.defaultProps = {
  url: 'https://jsonplaceholder.typicode.com/posts/1',
};

export default FetchDataComponent;
