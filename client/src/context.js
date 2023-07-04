import React, { createContext, useReducer, useEffect } from 'react';

// Definir el estado inicial
const initialState = {
    posts: [],
    selectedPostId: null
};

// Definir las acciones
const actions = {
    SET_POSTS: 'SET_POSTS',
    SET_SELECTED_POST_ID: 'SET_SELECTED_POST_ID',
    ADD_POST: 'ADD_POST',
    DELETE_POST: 'DELETE_POST'
};

// Definir el reducer
const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_POSTS:
            return { ...state, posts: action.payload };
        case actions.SET_SELECTED_POST_ID:
            return { ...state, selectedPostId: action.payload };
        case actions.ADD_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case actions.DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
        default:
            return state;
    }
};

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const apiUrl = 'http://localhost:9000/posts';
        const getAllPosts = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                dispatch({ type: 'SET_POSTS', payload: data });
            } catch (error) {
                console.error('Error al consultar la publicación: ', error);
                throw error;
            }
        };
        console.log(state.posts);
        getAllPosts();
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
