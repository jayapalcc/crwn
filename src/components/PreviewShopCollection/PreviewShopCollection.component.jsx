import React from 'react';
import './previewshop-collection.styles.scss';
import PSCItem from '../PSCItem/PSCItem.component'


const PreviewShopCollection = (props)=> {
    //console.log('-----PreviewShopCollection------');console.log(props);console.log('-----PreviewShopCollection------');
    return (
        <div className="previewshop-collection">
            <div className="previewshop-items">
                {props.items.map(item => <PSCItem key={item.id} item={item}></PSCItem>)}
            </div>
        </div>);
};


export default PreviewShopCollection;