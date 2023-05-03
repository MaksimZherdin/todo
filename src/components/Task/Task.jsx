import { formatDistanceToNow as time } from 'date-fns';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Task({ removeTask, task, tasksListComplete }) {
  const [seconds, setSeconds] = useState(task.sec);
  const [minutes, setMinutes] = useState(task.min);
  const [editing, setEditing] = useState(false);
  const [counter, setCounter] = useState(true);
  const [value, setValue] = useState('');
  const boolean = true;
  const style = { fontSize: '20px', margin: '15px', marginLeft: '60px', width: '300px' };
  const edit = (e) => {
    if (e.key === 'Enter') {
      task.name = e.target.value;
      setEditing(false);
    }
  };
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
  const startTimer = () => {
    task.timer = false;
    if (counter) {
      setCounter(false);
      const interval = setInterval(() => {
        if (task.timer) {
          clearInterval(interval);
          return;
        }
        if (task.sec <= 0) {
          if (task.min <= 0) {
            task.timer = true;
            return;
          }
          task.min -= 1;
          setMinutes((prev) => prev - 1);
          task.sec = 60;
          setSeconds(60);
        }
        task.sec -= 1;
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    setCounter(true);
    task.timer = true;
  };
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        {editing ? (
          set()
        ) : (
          <>
            <input
              id=""
              defaultChecked={task.isChecked ? boolean : !boolean}
              onClick={func}
              className="toggle"
              type="checkbox"
            />
            <label htmlFor="">
              <span className="title">{task.name}</span>
              <span className="description">
                <button
                  onClick={() => startTimer()}
                  aria-label="icon icon-play"
                  type="button"
                  className="icon icon-play"
                />
                <button
                  onClick={() => stopTimer()}
                  aria-label="icon icon-pause"
                  type="button"
                  className="icon icon-pause"
                />
                {minutes == null ? 0 : minutes}min:{seconds == null ? 0 : seconds}sec
              </span>
              <span className="description">{time(new Date())}</span>
            </label>
            <button
              aria-label="icon-edit"
              type="button"
              onClick={() => setEditing(!editing)}
              className="icon icon-edit"
            />
            <button
              aria-label="icon-destroy"
              type="button"
              onClick={() => removeTask(task)}
              className="icon icon-destroy"
            />
          </>
        )}
      </div>
    </li>
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
