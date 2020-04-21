import React from 'react';
import PreviewShopCollection from '../PreviewShopCollection/PreviewShopCollection.component';
import {connect} from 'react-redux';
import './shopcollection-detail.styles.scss'; 


class ShopCollectionDetail extends React.Component{

    render(){
        
        return (
            <div>
                <div className="heading-primary">{this.props.match.params.categoryId.toUpperCase()}</div>
                {this.props.collections.map((outerItem) => (outerItem.title.toLowerCase()===this.props.match.params.categoryId.toLowerCase())? (<PreviewShopCollection key={`PreviewShop${outerItem.id}`} {...outerItem}></PreviewShopCollection>):null)}
            </div>
        );
    }

} 

function mapStateToProps(state){
    return{
        collections : state.shop.collections
    }
}
  
export default connect(mapStateToProps, null)(ShopCollectionDetail);