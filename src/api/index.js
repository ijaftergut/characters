import axios from 'axios';

const getHeaders = ()=> {
  return {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  };
};

const fetchProducts = async(setProducts)=> {
  const response = await axios.get('/api/products');
  setProducts(response.data);
};
const fetchCharacters = async(setCharacters)=> {
  const response = await axios.get('/api/characters');
  setCharacters(response.data);
};

const attemptLoginWithToken = async(setAuth)=> {
  const token = window.localStorage.getItem('token');
  if(token){
    try {
      const response = await axios.get('/api/me', getHeaders());
      setAuth(response.data);
    }
    catch(ex){
      if(ex.response.status === 401){
        window.localStorage.removeItem('token');
      }
    }
  }
}

const login = async({ credentials, setAuth })=> {
  const response = await axios.post('/api/login', credentials);
  const { token } = response.data;
  window.localStorage.setItem('token', token);
  attemptLoginWithToken(setAuth);
}

const logout = (setAuth)=> {
  window.localStorage.removeItem('token');
  setAuth({});
}

const api = {
  login,
  logout,
  fetchProducts,
  fetchCharacters,
  attemptLoginWithToken
};

export default api;
