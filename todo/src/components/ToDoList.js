import React, { useReducer } from 'react'

import { reducer } from '../reducers/Reducer'

const initialState = 
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            {Array.isArray(state) ? <p>ToDoList</p> : <p>{JSON.stringify(initialState)}</p>}
        </>
    )
}

export default ToDoList