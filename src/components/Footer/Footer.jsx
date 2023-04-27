import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ taskList, setTaskList, tasksListFiltred }) {
  const clearList = () => {
    setTaskList((taskList) => taskList.filter((item) => item.completed === false));
  };
  const counter = () => {
    let counter = 0;
    return function () {
      for (let i = 0; i < taskList.length; i += 1) {
        if (taskList[i].completed === false) {
          counter += 1;
        }
      }
      return counter;
    };
  };

  const count = counter();

  return (
    <footer className="footer">
      <span className="todo-count">{count()} items left</span>
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
      id: PropTypes.func,
    })
  ),
  setTaskList: PropTypes.func,
  tasksListFiltred: PropTypes.func,
};

export default Footer;
