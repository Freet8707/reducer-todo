export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, 
                {
                    item: action.payload,
                    completed: false,
                    id: Math.random()
                }
            ]
        case 'SET_COMPLETE':
            console.log(state, action)
            let newState = state.map(item => {
                if(item.id === action.payload.id){
                    return {...item, completed: action.payload.complete};
                }
                return item
            })
            return state = newState
        default:
            return state
    }
}