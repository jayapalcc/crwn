import React from 'react';
import ShopCollection from '../ShopCollection/ShopCollection.component';
import {Switch, Route} from 'react-router-dom';
import ShopCollectionDetail from '../ShopCollectionDetail/ShopCollectionDetail.component';
import {connect} from 'react-redux';
import { firestore } from '../../Firebase/Firebase.utils';
import LoadingLottie from '../../Lottie/Lottie.component';

class Shop extends React.Component{
    
    
    
    componentDidMount(){
        this.props.loaderStart();
        const cRef = firestore.collection('collections');
        
        /*const baseUrl = 'https://firestore.googleapis.com/v1/projects/clothingstore-5ab7e/databases/(default)/documents/collections';
        fetch(baseUrl).then(response=> response.json()).then(collections=>console.log(collections));*/
        
        cRef.get().then(snapshot=>{
            const orderlyCollection = snapshot.docs.map(doc=>{
                const {title, items} = doc.data();
                return {id: doc.id,
                    title,
                    routeName: encodeURI(title.toLowerCase()),
                    items
               } 
            });
            //setTimeout(() => {  console.log("World!"); }, 2000);   
            this.props.loaderEnd(); 
            this.props.updateCollectionsFromFirestore(orderlyCollection);        
             
        });
        
    }
    

    render(){
        //console.log(this.props);
        
        return (
            <div>
                {this.props.loaderStatus
                ?<LoadingLottie/>
                :null}

                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={ShopCollection}></Route>
                    <Route path={`${this.props.match.path}/:categoryId`} component={ShopCollectionDetail}></Route>
                </Switch>
            </div>
        );
    }

} 

function mapStateToProps(state){
    return{
        loaderStatus: state.shop.loader
    }
}

function mapDispatchToProps(dispatch){
    return{
        updateCollectionsFromFirestore: (newCollections)=>{
            const action ={
                type: 'UPDATE_COLLECTION',
                payload: newCollections
            }
            dispatch(action);
        },
        loaderStart: ()=>{
            const action ={
                type: 'LOAD_ANIMATION' 
            }
            dispatch(action);
        },
        loaderEnd: ()=>{
            const action ={
                type: 'END_ANIMATION'
            }
            dispatch(action);
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Shop);