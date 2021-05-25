export const AddToReadingList = (payLoad) =>{
   return{
    type:'ADD_TO_READING_LIST',
    payLoad,
   }
}

export const RemoveFromReadingList = (payLoad) =>{
    return{
        type:'REMOVE_FROM_READING_LIST',
        payLoad,
    }
}

export const AddToFinishList = (payLoad) =>{
    return{
     type:'ADD_TO_FINISH_LIST',
     payLoad,
    }
 }