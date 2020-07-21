

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, 
                {
                    item: action.payload.item,
                    completed: action.payload.completed,
                    id: action.payload.id
                }
            ]
        default:
            return state
    }
}