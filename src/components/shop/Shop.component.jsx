import React from 'react';
import ShopCollection from '../ShopCollection/ShopCollection.component';
import {Switch, Route} from 'react-router-dom';
import ShopCollectionDetail from '../ShopCollectionDetail/ShopCollectionDetail.component';

class Shop extends React.Component{
    
    render(){
        //console.log(this.props);    
        return (
            <div>
                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={ShopCollection}></Route>
                    <Route path={`${this.props.match.path}/:categoryId`} component={ShopCollectionDetail}></Route>
                </Switch>
            </div>
        );
    }

} 

export default Shop;