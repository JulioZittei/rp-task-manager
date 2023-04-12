import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(`https://fsc-task-manager-backend.herokuapp.com/tasks`);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return <div className="App">{tasks}</div>;
}

export default App;
