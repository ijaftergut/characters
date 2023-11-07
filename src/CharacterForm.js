import React, { useState, useEffect } from "react";
import api from "./api";

const CharacterForm = ({ userId, auth, existingCharacter, characters, setCharacters, onError }) => {
  const [name, setName] = useState("");
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);
 
  const handleCharacterSubmission = async (ev) => {
    ev.preventDefault()
      const json = { name: name, strength:strength, user_id: auth.id, dexterity:dexterity, constitution:constitution, intelligence:intelligence, wisdom:wisdom, charisma:charisma};
      const response = await api.submitCharacter(json);
      setCharacters([...characters, response])

  };
 
  return (
    <div>
      {
        <form onSubmit={handleCharacterSubmission}>
          <label>
            Character:
            <textarea
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Strength:
            <input
              type="number"
              value={strength}
              onChange={(e) => setStrength(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>
          <label>
            Dexterity:
            <input
              type="number"
              value={dexterity}
              onChange={(e) => setDexterity(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>
          <label>
            Constitution:
            <input
              type="number"
              value={constitution}
              onChange={(e) => setConstitution(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>
          <label>
            Intelligence:
            <input
              type="number"
              value={intelligence}
              onChange={(e) => setIntelligence(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>
          <label>
            Wisdom:
            <input
              type="number"
              value={wisdom}
              onChange={(e) => setWisdom(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>
          <label>
            Charisma:
            <input
              type="number"
              value={charisma}
              onChange={(e) => setCharisma(parseInt(e.target.value, 10))}
              min="1"
              max="25"
              required
            />
          </label>

          <button type="submit">Submit Character</button>
        </form>
      }
    </div>
  );
};

export default CharacterForm;