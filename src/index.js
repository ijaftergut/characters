import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, HashRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Characters from './Characters';
import Login from './Login';
import api from './api';

const App = ()=> {
  const [products, setProducts] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [auth, setAuth] = useState({});

  const attemptLoginWithToken = async()=> {
    await api.attemptLoginWithToken(setAuth);
  }

  useEffect(()=> {
    attemptLoginWithToken();
  }, []);

  useEffect(()=> {
    const fetchData = async()=> {
      await api.fetchProducts(setProducts);
    };
    fetchData();
  }, []);
  useEffect(()=> {
    const fetchData = async()=> {
      await api.fetchCharacters(setCharacters);
    };
    fetchData();
  }, []);

  const login = async(credentials)=> {
    await api.login({ credentials, setAuth });
  }

  const logout = ()=> {
    api.logout(setAuth);
  }

  return (
    <div>
      {
        auth.id ? (
          <>
            <nav>
            <Link to='/products'>Products ({ products.length })</Link>
            <Link to='/characters'>Characters ({ characters.length })</Link>
              
              <span>
                Welcome { auth.username }!
                <button onClick={ logout }>Logout</button>
              </span>
            </nav>
            <main>
            <Products
                auth = { auth }
                products={ products }
                
              />
              <Characters
                auth = { auth }
                characters={ characters }
                setCharacters={setCharacters}
              />
              
            </main>
            </>
        ):(
          <div>
            <Login login={ login }/>
          
          </div>
        )
      }
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
