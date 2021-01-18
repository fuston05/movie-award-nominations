import React, { useState } from 'react';

// components
import { Loader } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
