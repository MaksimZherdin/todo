import PropTypes from 'prop-types';

function TasksFilter({ tasksListFiltred }) {
  return (
    <ul className="filters">
      <li>
        <input name="filter" value="all" type="radio" className="selected" onClick={() => tasksListFiltred('all')} />
        <label htmlFor="all">All</label>
      </li>
      <li>
        <input name="filter" value="active" type="radio" onClick={() => tasksListFiltred(false)} />
        <label htmlFor="active">Active</label>
      </li>
      <li>
        <input name="filter" value="completed" type="radio" onClick={() => tasksListFiltred(true)} />
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
