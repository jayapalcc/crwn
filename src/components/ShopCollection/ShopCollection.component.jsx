import React from 'react';
import PreviewCollection from '../PreviewCollection/PreviewCollection.component';
import {connect} from 'react-redux';

class ShopCollection extends React.Component{
    render(){
        //console.log(this.props);
        const {collections} = this.props;
        return (
            <div>
                {collections.map((outerItem) => <PreviewCollection key={`Preview${outerItem.id}`} displayCount="4" {...outerItem}></PreviewCollection>)}
            </div>
        );
    }

} 

function mapStateToProps(state){
    return{
        collections : state.shop.collections
    }
}
  
export default connect(mapStateToProps, null)(ShopCollection);