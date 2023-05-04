import PropTypes from 'prop-types';

function TasksFilter({ tasksListFiltred }) {
  return (
    <ul className="filters">
      <li className="radio">
        <input id="all" name="filter" defaultChecked value="All" type="radio" onClick={() => tasksListFiltred('all')} />
        <label htmlFor="all">All</label>
      </li>
      <li className="radio">
        <input id="active" name="filter" value="Active" type="radio" onClick={() => tasksListFiltred(false)} />
        <label htmlFor="active">Active</label>
      </li>
      <li className="radio">
        <input id="completed" name="filter" value="Completed" type="radio" onClick={() => tasksListFiltred(true)} />
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
