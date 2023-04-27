import { useState, useEffect } from 'react';

import NewTaskForm from './components/newTaskForm/NewTaskForm';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';

function App() {
  const completed = false;
  const [taskList, setTaskList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [taskListFiltred, setTaskListFiltred] = useState(taskList);

  useEffect(() => setTaskListFiltred(taskList), [taskList]);

  const tasksListFiltred = (value) => {
    if (value === 'all') {
      setTaskListFiltred(taskList);
    } else {
      const newTaskList = [...taskList].filter((item) => item.completed === value);
      setTaskListFiltred(newTaskList);
    }
  };
  const tasksListComplete = (task) => {
    setTaskList((taskList) =>
      taskList.map((item) => (item.id === task.id ? { ...item, completed: !item.completed } : { ...item }))
    );
  };
  const createTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const removeTask = (task) => {
    setTaskList(taskList.filter((item) => item.id !== task.id));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <NewTaskForm isChecked={isChecked} completed={completed} taskList={taskList} createTask={createTask} />
      </header>
      <section className="main">
        <TaskList
          taskListFiltred={taskListFiltred}
          removeTask={removeTask}
          tasksListComplete={tasksListComplete}
          completed={completed}
          isChecked={isChecked}
        />
        <Footer
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          setTaskList={setTaskList}
          taskList={taskList}
          tasksListFiltred={tasksListFiltred}
        />
      </section>
    </section>
  );
}

export default App;
