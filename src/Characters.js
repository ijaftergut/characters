import React from 'react';
import { Link } from 'react-router-dom';

const Characters = ({ characters, auth})=> {
  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {
          characters.map( character => {
           
            return (
              <li key={ character.id }>
                { character.name }
               
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Characters;
