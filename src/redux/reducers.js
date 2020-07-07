

//this reducer will be responsible for handling the json object and passing to component
const totalReturns =(state=[], action)=>{
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return action.payload;
        default:
            return state;
    }
}
export default totalReturns