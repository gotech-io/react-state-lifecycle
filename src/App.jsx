import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import IntervalCounter from './IntervalCounter';
import FetchDataComponent from './FetchDataComponent';

import './App.css';

const App = () => {
  const [shouldRun, setShouldRun] = useState(false);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ToggleButton
        initialState={shouldRun}
        onChange={(newState) => setShouldRun(newState)}
      />
      <IntervalCounter shouldRun={shouldRun} />
      <FetchDataComponent />
    </div>
  );
};

export default App;
