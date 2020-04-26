
const fetchCollectionStartAction = ()=>{
            const action ={
                type: 'FETCH_COLLECTION_INIT' 
            }
            return action;
}
const fetchCollectionSuccessAction= (newCollections)=>{
            const action ={
                type: 'FETCH_COLLECTION_SUCCESS',
                payload: newCollections
            }
            return action;
}

const fetchCollectionFailedAction = (message)=>{
            const action ={
                type: 'FETCH_COLLECTION_FAILED',
                payload: message
            }
            return action;
}

export {fetchCollectionStartAction, fetchCollectionSuccessAction, fetchCollectionFailedAction};