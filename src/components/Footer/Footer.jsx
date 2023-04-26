import TasksFilter from '../TasksFilter/TasksFilter'
import PropTypes from 'prop-types'
function Footer({ taskList, setTaskList, tasksListFiltred }) {
  const clearList = () => {
    setTaskList((taskList) => {
      let arr = taskList.filter((item) => item.completed === false)
      arr.forEach((item) => (item.isChecked = false))
      return arr
    })
  }
  function counter() {
    let counter = 0
    return function () {
      taskList.forEach((item) => (item.completed === false ? counter++ : null))
      return counter
    }
  }
  const count = counter()

  return (
    <>
      <footer className="footer">
        <span className="todo-count">{count()} items left</span>
        <TasksFilter tasksListFiltred={tasksListFiltred} setTaskList={setTaskList} taskList={taskList} />
        <button onClick={clearList} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  )
}

Footer.defaultProps = {
  taskList: [],
  setTaskList: () => {},
  tasksListFiltred: () => {},
}

Footer.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object),
  setTaskList: PropTypes.func,
  tasksListFiltred: PropTypes.func,
}

export default Footer
