import allBook from '../../fakeData/books.json';

const initialState = {
    discoverList : allBook,
    readingList:[ ],
    finishedList:[]
}

export const bookReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_READING_LIST': {
            const newState ={
                ...state,
                readingList:[...state.readingList, action.payLoad]
            }
            return newState
        } 
        case 'REMOVE_FROM_READING_LIST':{
            const newState = {
                ...state,
                readingList: state.readingList.filter((book) => book.id!== action.payLoad)
            }
            return newState
        }
        case 'ADD_TO_FINISH_LIST':{
            const newState = {
                ...state,
                finishedList:[...state.finishedList, action.payLoad]
            }
            return newState
        }
        default: {
            return  state
        }
    }
}