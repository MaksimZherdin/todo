import { formatDistanceToNow as time } from 'date-fns';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Task({ removeTask, task, tasksListComplete }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');
  const boolean = true;
  const edit = (e) => {
    if (e.key === 'Enter') {
      task.name = value;
      setEditing(false);
    }
  };
  const style = { fontSize: '20px' };
  const set = () => (
    <input
      style={style}
      onKeyDown={edit}
      value={value.length === 0 ? task.name : value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );

  const func = () => {
    task.isChecked = !task.isChecked;
    tasksListComplete(task);
  };

  return (
    <div className="view">
      <input
        id=""
        defaultChecked={task.isChecked ? boolean : !boolean}
        onClick={func}
        className="toggle"
        type="checkbox"
      />
      <label htmlFor="">
        <span className="description">{editing ? set() : task.name}</span>
        <span className="created">{time(new Date())}</span>
      </label>
      <button aria-label="icon-edit" type="button" onClick={() => setEditing(!editing)} className="icon icon-edit" />
      <button aria-label="icon-destroy" type="button" onClick={() => removeTask(task)} className="icon icon-destroy" />
    </div>
  );
}

Task.defaultProps = {
  removeTask: () => {},
  task: { name: 'empty', completed: false, isChecked: false, id: 0 },
  tasksListComplete: () => {},
  isChecked: false,
};

Task.propTypes = {
  removeTask: PropTypes.func,
  task: PropTypes.shape({
    name: PropTypes.string,
    completed: PropTypes.bool,
    isChecked: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  }),
  tasksListComplete: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default Task;
