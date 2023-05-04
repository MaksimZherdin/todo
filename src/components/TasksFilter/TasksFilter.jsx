import PropTypes from 'prop-types';

function TasksFilter({ tasksListFiltred }) {
  return (
    <ul className="filters">
      <li className="radio">
        <input id="all" value="all" name="filter" type="radio" defaultChecked onClick={() => tasksListFiltred('all')} />
        <label htmlFor="all">All</label>
      </li>
      <li className="radio">
        <input id="active" value="active" name="filter" type="radio" onClick={() => tasksListFiltred(false)} />
        <label htmlFor="active">Active</label>
      </li>
      <li className="radio">
        <input id="completed" value="completed" name="filter" type="radio" onClick={() => tasksListFiltred(true)} />
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
