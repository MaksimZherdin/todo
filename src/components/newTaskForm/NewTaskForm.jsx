import { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ createTask, completed, isChecked }) {
  const [counter, setCounter] = useState(0);
  const [valueSec, setValueSec] = useState(null);
  const [valueMin, setValueMin] = useState(null);
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
          min: valueMin,
          sec: valueSec,
          timer: false,
        };
        createTask(newTask);
        setTaskName('');
        setValueMin(0);
        setValueSec(0);
      }
    }
  };

  return (
    <>
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={click}
          className="new-todo"
          placeholder="Task"
        />
        <input
          min={0}
          type="number"
          value={valueMin}
          onChange={(e) => setValueMin(e.target.value)}
          className="new-todo-form__timer"
          placeholder="Min"
          onKeyDown={click}
        />
        <input
          min={0}
          type="number"
          value={valueSec}
          onChange={(e) => setValueSec(e.target.value)}
          className="new-todo-form__timer"
          placeholder="Sec"
          onKeyDown={click}
        />
      </form>
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
