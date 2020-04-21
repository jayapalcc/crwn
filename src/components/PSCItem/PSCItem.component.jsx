import React from 'react';
import './psc-item.styles.scss';
import {connect} from 'react-redux';
import FormButton from '../FormButton/FormButton.component'

const PSCItem = (props)=> {
    //console.log('-----PSCItem------');console.log(props);console.log('-----PSCItem------');
    return (
        <div className="psc-item">
            <div className="psc-item-body" style={{backgroundImage: `url(${props.item.imageUrl})`}}>
                    <div className="psc-item-body-shade">
                        <FormButton onClick={()=>props.clickAddToCart(props.item)} className="psc-item-body-image-button btn white-bg__black-text">
                            ADD TO CART
                        </FormButton>
                    </div>
            </div>
            <div className="psc-item-footer">
                <div className="psc-item-footer-name">
                    {props.item.name}
                </div>
                <div className="psc-item-footer-price">
                    {`$${props.item.price}`}
                </div>
            </div>
        </div>);
};



function mapDispatchToProps(dispatch){
    return{
        clickAddToCart: (item)=>{
            const action ={
                type: 'ADD_TO_CART',
                payload: item
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(PSCItem);