const client = require('./client');
const { v4 } = require('uuid');
const uuidv4 = v4;

const fetchCharacters = async()=> {
  const SQL = `
    SELECT *
    FROM characters
  `;
  const response = await client.query(SQL);
  return response.rows;
};

const createCharacters = async(character)=> {
  const SQL = `
    INSERT INTO characters (id, user_id, name, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
  `;
  const response = await client.query(SQL, [ uuidv4(), character.user_id, character.name, character.strength, character.dexterity, character.constitution, character.intelligence, character.wisdom, character.charisma]);
  return response.rows[0];
};

module.exports = {
  fetchCharacters,
  createCharacters
};
