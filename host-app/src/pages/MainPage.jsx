import React from 'react';
import { Link } from 'react-router-dom';

const list = [
    'Orange',
    'Banana',
    'Apple',
];

const MainPage = () => {
    return (
        <div>
          <h2>Main Page</h2>
          <Link to={'users'}>TO CHILD APP</Link>
          <h3>This is Main app that can contains its own pages or other apps with their pages and router</h3>
          <ul>
            {list.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      );
};

export default MainPage;
