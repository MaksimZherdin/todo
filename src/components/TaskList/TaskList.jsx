import Task from '../Task/Task'

import PropTypes from 'prop-types'

function TaskList({ taskListFiltred, removeTask, tasksListComplete, completed, isChecked }) {
  return (
    <>
      <ul className="todo-list">
        {taskListFiltred.map((item) => {
          return (
            <Task
              task={item}
              key={item.id}
              description={item.name}
              removeTask={removeTask}
              tasksListComplete={tasksListComplete}
              completed={completed}
              isChecked={isChecked}
            />
          )
        })}
      </ul>
    </>
  )
}

TaskList.defaultProps = {
  taskListFiltred: [],
  removeTask: () => {},
  tasksListComplete: () => {},
  completed: false,
  isChecked: false,
}

TaskList.propTypes = {
  taskListFiltred: PropTypes.arrayOf(PropTypes.object),
  removeTask: PropTypes.func,
  tasksListComplete: PropTypes.func,
  completed: PropTypes.bool,
  isChecked: PropTypes.bool,
}

export default TaskList
