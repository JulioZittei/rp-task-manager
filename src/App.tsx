import { useEffect, useState } from 'react';
import axios from 'axios';

import { Tasks } from './components/Tasks';

function App(): JSX.Element {
  return (
    <>
      <Tasks />
    </>
  );
}

export default App;
