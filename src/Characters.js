import React from 'react';
import { Link } from 'react-router-dom';

const Characters = ({ characters, auth})=> {
  console.log(auth.id)
  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.filter(character=>character.user_id===auth.id).map( character => {
          console.log(character.user_id)
           
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
