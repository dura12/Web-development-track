import React from 'react';
import style from './styles.module.css';
import { useState } from 'react';

interface InputProps {
  getData: (data: string) => void;
}

const Input: React.FC<InputProps> = ({ getData }) => {
  const [val, setval] = useState<string>('');

  const HandleClick = () => {
    getData(val);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${style.inputfield}`}
          placeholder="Add a new task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setval(e.target.value)}
          style={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        />
        <button
        type = "submit" 
          onClick={HandleClick}
          className={`btn btn-outline-success ${style.btn}`}
          id="button-addon2"
          onSubmit={() => setval("")}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;