
const initialStateData = {
    list : []
} 



const todoReducer = (state = initialStateData, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const {id , data} = action.payload
            return {
                ...state,
                list : [...state.list,
                    {                       
                    id : id,
                    data : data
                }]
            }
            case "DELETE_TODO":
                return {
                    ...state,
                    list: state.list.filter(item => item.id !== action.id)
                };
                case "REMOVE_ALL":
                return {
                    ...state,
                    list: []
                };
            default: return state;
            
    }
    
}
export default todoReducer;