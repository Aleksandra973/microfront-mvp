import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice'

const list = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Tom" },
  { id: 3, name: "Mike" },
];

const Users = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {list.map((i) => (
          <li key={i.id}>
            <Link to={`${i.id}`}>{i.name}</Link>
          </li>
        ))}
      </ul>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Users;
