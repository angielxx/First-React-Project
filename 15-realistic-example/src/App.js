import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((taksObj) => {
    const loadedTasks = [];

    for (const taskKey in taksObj) {
      loadedTasks.push({ id: taskKey, text: taksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  // 객체와 함수의 변경을 방지
  const httpData = useHttp(transformTasks);
  // 구조 분해 할당시 이름을 설정할 수 있음
  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    fetchTasks({ url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
