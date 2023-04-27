import { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ createTask, completed, isChecked }) {
  const [counter, setCounter] = useState(0);

  function func() {
    setCounter((prev) => prev + 1);
    return counter;
  }

  const [taskName, setTaskName] = useState('');

  const click = (e) => {
    if (taskName) {
      if (e.code === 'Enter') {
        const newTask = {
          name: taskName,
          completed,
          isChecked,
          id: func(),
        };
        createTask(newTask);
        setTaskName('');
      }
    }
  };

  return (
    <>
      <h1>todos</h1>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={click}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </>
  );
}

NewTaskForm.defaultProps = {
  createTask: () => {},
  completed: false,
  isChecked: false,
};

NewTaskForm.propTypes = {
  createTask: PropTypes.func,
  completed: PropTypes.bool,
  isChecked: PropTypes.bool,
};

export default NewTaskForm;
