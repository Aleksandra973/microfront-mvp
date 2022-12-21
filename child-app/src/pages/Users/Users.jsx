import React from 'react';
import { Link } from 'react-router-dom';

const list = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Tom'},
    {id: 3, name: 'Mike'},
];

const Users = () => {
    return (
        <div>
          <h2>User List</h2>
          <Link to={'/'}>RETURN TO MAIN APP</Link>
          <ul>
            {list.map(i => (
              <li key={i.id}>
                <Link to={`${i.id}`}>
                  {i.name}
                </Link>
                </li>
            ))}
          </ul>
        </div>
      );
};

export default Users;
