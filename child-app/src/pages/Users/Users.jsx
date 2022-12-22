import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../../slice'

const list = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Tom" },
  { id: 3, name: "Mike" },
];

const Users = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  useEffect(() => {
    const listener = () => {
      console.log('reset')
      dispatch(reset());
    }
    const listener2 = ({detail}) => {
      console.log('user')
      setUser(detail);
    }

    window.addEventListener('RESET_COUNT', listener)
    window.addEventListener('USER', listener2)

    return () => {
      window.removeEventListener('RESET_COUNT', listener);
      window.removeEventListener('USER', listener2)
    }
  }, []);

  return (
    <div>
      <h2>User List CHILD APP1</h2>
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

      <h2>User from main APP {user?.name}</h2>
    </div>
  );
};

export default Users;
