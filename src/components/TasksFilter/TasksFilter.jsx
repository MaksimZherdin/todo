import PropTypes from 'prop-types'

function TasksFilter({ tasksListFiltred }) {
  return (
    <>
      <ul className="filters">
        <li>
          <button className="selected" onClick={() => tasksListFiltred('all')}>
            All
          </button>
        </li>
        <li>
          <button onClick={() => tasksListFiltred(false)}>Active</button>
        </li>
        <li>
          <button onClick={() => tasksListFiltred(true)}>Completed</button>
        </li>
      </ul>
    </>
  )
}

TasksFilter.defaultProps = {
  tasksListFiltred: () => {},
}

TasksFilter.propTypes = {
  tasksListFiltred: PropTypes.func,
}

export default TasksFilter
