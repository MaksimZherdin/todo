import { formatDistanceToNow as time } from 'date-fns'
import { useState } from 'react'
import PropTypes from 'prop-types'
function Task({ removeTask, task, tasksListComplete }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('')

  const edit = (e) => {
    if (e.key === 'Enter') {
      task.name = value
      setEditing(false)
    }
  }
  const style = { fontSize: '20px' }
  const set = () => {
    return (
      <>
        <input
          style={style}
          onKeyDown={edit}
          value={value.length === 0 ? task.name : value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
      </>
    )
  }

  const func = () => {
    task.isChecked = !task.isChecked
    tasksListComplete(task)
  }

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input defaultChecked={task.isChecked ? true : false} onClick={func} className="toggle" type="checkbox" />
        <label>
          <span className="description">{editing ? set() : task.name}</span>
          <span className="created">{time(new Date())}</span>
        </label>
        <button onClick={() => setEditing(!editing)} className="icon icon-edit"></button>
        <button onClick={() => removeTask(task)} className="icon icon-destroy"></button>
      </div>
    </li>
  )
}

Task.defaultProps = {
  removeTask: () => {},
  task: { name: 'empty', completed: false, isChecked: false, id: 0 },
  tasksListComplete: () => {},
  isChecked: false,
}

Task.propTypes = {
  removeTask: PropTypes.func,
  task: PropTypes.object,
  tasksListComplete: PropTypes.func,
  isChecked: PropTypes.bool,
}

export default Task
