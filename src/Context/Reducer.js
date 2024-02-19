
const Reducer = (state,action) => {
 switch (action.type) {
   case 'delete_Transaction':
      return {...state,transaction:state.transaction.filter((item) => item.id !== action.payload)}
      case 'add_Transaction':
         return {...state,transaction:[action.payload,...state.transaction]}
    default:
       return state;
 }
}

export default Reducer