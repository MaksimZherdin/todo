import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ taskList, setTaskList, tasksListFiltred }) {
  const clearList = () => {
    setTaskList((taskList) => taskList.filter((item) => item.completed === false));
  };
  const counter = () => {
    let items = 0;
    taskList.reduce((acc, curr) => (curr.completed === false ? items++ : items + 0), 1);
    return items;
  };

  return (
    <footer className="footer">
      <span className="todo-count">{counter()} items left</span>
      <TasksFilter tasksListFiltred={tasksListFiltred} setTaskList={setTaskList} taskList={taskList} />
      <button type="button" onClick={clearList} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  taskList: [],
  setTaskList: () => {},
  tasksListFiltred: () => {},
};

Footer.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      completed: PropTypes.bool,
      isChecked: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    })
  ),
  setTaskList: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  tasksListFiltred: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
};

export default Footer;
