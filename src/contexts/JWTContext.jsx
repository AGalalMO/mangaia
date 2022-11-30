import { APIS } from '../utils/ServiceUrls';
import { createContext, ReactNode, useEffect, useReducer } from 'react';
// utils
// @types
import { ActionMap, AuthState, AuthUser, JWTContextType } from '../@types/auth';
import axiosInstance from '../utils/axios/axiosInstance';
import { isValidToken, setSession } from '../utils/jwt'
// ----------------------------------------------------------------------






const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext < JWTContextType | null > (null);

// ----------------------------------------------------------------------


function AuthProvider ({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: null
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axiosInstance.post(APIS.AUTH.SIGNIN, {
      email,
      password,
    });
    const { accessToken } = response.data.data;
    setSession(accessToken);
    dispatch({
      type: Types.Login,
      payload: {
        user: {

        },
      },
    });
  };

  const register = async (email, password, firstName, lastName) => {
    const response = await axiosInstance.post(APIS.AUTH.SIGNIN, {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
