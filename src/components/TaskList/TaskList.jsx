import PropTypes from 'prop-types';

import Task from '../Task/Task';

function TaskList({ taskListFiltred, removeTask, tasksListComplete, completed, isChecked }) {
  return (
    <ul className="todo-list">
      {taskListFiltred.map((item) => (
        <li className={item.completed ? 'completed' : ''}>
          <Task
            task={item}
            key={item.id}
            description={item.name}
            removeTask={removeTask}
            tasksListComplete={tasksListComplete}
            completed={completed}
            isChecked={isChecked}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.defaultProps = {
  taskListFiltred: [],
  removeTask: () => {},
  tasksListComplete: () => {},
  completed: false,
  isChecked: false,
};

TaskList.propTypes = {
  taskListFiltred: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      completed: PropTypes.bool,
      isChecked: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    })
  ),
  removeTask: PropTypes.func,
  tasksListComplete: PropTypes.func,
  completed: PropTypes.bool,
  isChecked: PropTypes.bool,
};

export default TaskList;
