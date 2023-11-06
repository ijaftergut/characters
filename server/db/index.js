const client = require('./client');

const {
  fetchProducts,
  createProduct
} = require('./products');

const {
  fetchCharacters,
  createCharacters
} = require('./characters');

const {
  createUser,
  authenticate,
  findUserByToken
} = require('./auth');


const seed = async()=> {
  const SQL = `
    DROP TABLE IF EXISTS characters;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;

    CREATE TABLE users(
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT now(),
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      is_admin BOOLEAN DEFAULT false NOT NULL
    );

    CREATE TABLE products(
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT now(),
      name VARCHAR(100) UNIQUE NOT NULL
    );

    CREATE TABLE characters (
      id UUID PRIMARY KEY,
      user_id UUID REFERENCES users(id) NOT NULL,
      name VARCHAR(100) NOT NULL,
      strength INTEGER NOT NULL,
      dexterity INTEGER NOT NULL,
      constitution INTEGER NOT NULL,
      intelligence INTEGER NOT NULL,
      wisdom INTEGER NOT NULL,
      charisma INTEGER NOT NULL
    );
    

  `;
  await client.query(SQL);

  const [moe, lucy, ethyl] = await Promise.all([
    createUser({ username: 'moe', password: 'm_password', is_admin: false}),
    createUser({ username: 'lucy', password: 'l_password', is_admin: false}),
    createUser({ username: 'ethyl', password: '1234', is_admin: true})
  ]);
  const [foo, bar, bazz] = await Promise.all([
    createProduct({ name: 'foo' }),
    createProduct({ name: 'bar' }),
    createProduct({ name: 'bazz' }),
    createProduct({ name: 'quq' }),
  ]);
  const [alpha, beta, omega] = await Promise.all([
    createCharacters({ user_id:ethyl.id, name: 'alpha', strength:10, dexterity:10, constitution:10, intelligence:10, wisdom:10, charisma:10 }), 
    createCharacters({ user_id:moe.id, name: 'beta', strength:10, dexterity:10, constitution:10, intelligence:10, wisdom:10, charisma:10 }), 
    createCharacters({ user_id:ethyl.id, name: 'omega', strength:10, dexterity:10, constitution:10, intelligence:10, wisdom:10, charisma:10 }),

  ]);
};

module.exports = {
  fetchProducts,
  fetchCharacters,
  authenticate,
  findUserByToken,
  seed,
  client
};
