import PropTypes from 'prop-types';

function TasksFilter({ tasksListFiltred }) {
  return (
    <ul className="filters">
      <li>
        <input value="all" name="filter" type="radio" className="selected" onClick={() => tasksListFiltred('all')} />
        <label htmlFor="all">All</label>
      </li>
      <li>
        <input value="active" name="filter" type="radio" onClick={() => tasksListFiltred(false)} />
        <label htmlFor="active">Active</label>
      </li>
      <li>
        <input value="completed" name="filter" type="radio" onClick={() => tasksListFiltred(true)} />
        <label htmlFor="completed">Completed</label>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  tasksListFiltred: () => {},
};

TasksFilter.propTypes = {
  tasksListFiltred: PropTypes.func,
};

export default TasksFilter;
