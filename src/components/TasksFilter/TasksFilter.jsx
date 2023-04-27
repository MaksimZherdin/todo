import PropTypes from 'prop-types';

function TasksFilter({ tasksListFiltred }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" className="selected" onClick={() => tasksListFiltred('all')}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={() => tasksListFiltred(false)}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={() => tasksListFiltred(true)}>
          Completed
        </button>
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
