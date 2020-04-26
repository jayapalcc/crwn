import React from 'react';
import ShopCollection from '../ShopCollection/ShopCollection.component';
import {Switch, Route} from 'react-router-dom';
import ShopCollectionDetail from '../ShopCollectionDetail/ShopCollectionDetail.component';
import {connect} from 'react-redux';
import {fetchCollectionStartAction} from './Shop.actions'
import LoadingLottie from '../../Lottie/Lottie.component';

class Shop extends React.Component{
    
    
    
    componentDidMount(){
        this.props.fetchCollectionStart();
            /*const baseUrl = 'https://firestore.googleapis.com/v1/projects/clothingstore-5ab7e/databases/(default)/documents/collections';
        fetch(baseUrl).then(response=> response.json()).then(collections=>console.log(collections));*/       
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
        loaderStatus: state.shop.isFetching
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchCollectionStart: ()=>{
            dispatch(fetchCollectionStartAction())
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Shop);