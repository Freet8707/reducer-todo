import React, { useState, useReducer } from 'react'
import styled from 'styled-components'

import { reducer } from '../reducers/Reducer'

const BodyDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  background: #d3fffe;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div {
    width: 100%;
    text-align: center;
    input {
        width: 80%;
        margin: 50px 10% 50px 10%;
        height: 25px;   
    }
    button {
        width: 100%;
        max-width: 100px;
        height: 40px;
    }
  }
`;

const NoteCard = styled.span`
    width: 250px;
    margin: 50px 25px 0 25px;
    height: 250px;
    background: #f8ff49;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;    
    font-size: 1rem;
    h2 {
        font-family: 'Roboto Mono', monospace;
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0;
        padding: 40px 0 0 20px;
    }
    p {
        padding: 0 0 20px 20px;
        margin: 0;
    }
`;



const ToDoList = () => {
    const [state, dispatch] = useReducer(
        reducer, 
        [
            {
                item: 'Learn about reducers',
                completed: false,
                id: Math.random()
            }
        ]);
    const [taskName, setTaskName] = useState('')

    const handleChanges = (e) => {
        setTaskName(e.target.value)
    }

    return(
        <BodyDiv>
            <div>
                <input 
                    type='text'
                    name='taskName'
                    placeholder='Enter task name'
                    value={taskName}
                    onChange={handleChanges}
                />
                <button onClick={() => {
                    dispatch( { type: 'ADD_TODO', payload: taskName})
                }}>Add Your Task</button>
            </div>
            {state.map(item => {
                return (
                    <NoteCard key={item.id}>
                        <h2>Task Name: </h2>
                        <h2>{item.item}</h2>
                        <p onClick={() => { dispatch({ type: 'SET_COMPLETE', payload: {complete: !item.completed, id: item.id}})}}>{item.completed ? "Task complete" : "Task incomplete"}</p>
                    </NoteCard>
                )
            })}
        </BodyDiv>
    )
}

export default ToDoList