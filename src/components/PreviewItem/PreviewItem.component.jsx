import React from 'react';
import './preview-item.styles.scss';
import FormButton from '../FormButton/FormButton.component';
import {connect} from 'react-redux';
//import {withRouter} from 'react-router-dom';

const PreviewItem = (props)=> {

    return (<div className="preview-item">
                <div className="preview-item-image" style={{backgroundImage : `url(${props.item.imageUrl})`}}>
                    <div className="shade"> 
                        <FormButton onClick={()=>props.clickAddToCart(props.item)} className="card-btn btn white-bg__black-text">ADD TO CART</FormButton> 
                    </div>
                </div>
                <div className="footer">
                        <h2 style={{fontWeight:600}}>{props.item.name}</h2>
                        <h2 style={{fontWeight:300}}>{`$ ${props.item.price}`}</h2>        
                </div>  
                
            </div>
    );
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

export default connect(null,mapDispatchToProps)(PreviewItem);