import {firestore} from '../../Firebase/Firebase.utils';
import {takeLatest, put} from 'redux-saga/effects';
import {fetchCollectionFailedAction, fetchCollectionSuccessAction} from './Shop.actions'


function* startFirebaseImportingCollections(){
    /*const state = yield select();
    console.log(state);*/
    try{
        const cRef = firestore.collection('collections');
        const snapshot = yield cRef.get();
        const orderlyCollection = snapshot.docs.map(doc=>{
                const {title, items} = doc.data();
    
                return {id: doc.id,
                    title,
                    routeName: encodeURI(title.toLowerCase()),
                    items
                } 
        });
        
        yield put(fetchCollectionSuccessAction(orderlyCollection));
        /*const state = yield select();
        console.log(state);*/
    }catch(error){
        yield put(fetchCollectionFailedAction(error.message));
    }
}

export default function* fetchCollectionsInit(){
    yield takeLatest('FETCH_COLLECTION_INIT', startFirebaseImportingCollections);
}
