// const initialState = {
//     list: []
// }

// const AddCard = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_BOARD': const { id, Data } = action.payload;
//             return {
//                 ...state,
//                 list: [
//                     ...state.list,
//                     {
//                         id: id,
//                         Data: Data
//                     }
//                 ]
//             }

//         case 'DELET_USER_ON_BOARD': const DeleteOneUser = state.list.filter((Data) => Data.id !== action.id)
//             return {
//                 ...state,
//                 list: DeleteOneUser
//             }

//         case 'EDIT_USER_ON_BOARD':
//             return {
//                 ...state,
//                 users: state.users.map(user => {
//                     if (user.id === action.userId) {
//                         return {
//                             ...user,
//                             ...action.newData
//                         };
//                     }
//                     return user;
//                 })
//             };
//         default: return state;
//     }
// }

// export default AddCard;