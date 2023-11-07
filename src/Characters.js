import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import api from "./api";
const Characters = ({ characters, auth, setCharacters})=> {

  const handleCharacterSubmission = async () => {
    try {
      const response = await api.submitCharacter(json);
        setCharacters([...characters, response]);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
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
      <CharacterForm
            userId={auth.id}
            onSubmit={handleCharacterSubmission}
            characters={characters}
            setCharacters={setCharacters}
            auth={auth}
          />
    </div>
  );
};

export default Characters;
