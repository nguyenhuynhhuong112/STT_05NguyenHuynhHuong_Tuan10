const initialState = {
  data: null,
};

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TODO_LIST":
      return { ...state, data: action.payload };
    case 'CREATE_TODO':
     return{
      ...state, data:state.data ? [...state.data,  action.payload]:[action.payload]
     }
     case 'UPDATE_TODO':
     
      return {data:action.payload}
    case 'DELETE_TODO':
      const todoDelete = action.payload
      const newTodo = (state.data || []).filter((todo)=>todo.id !== todoDelete)
      return {data:newTodo}
      default:
      return state;
  }
};
