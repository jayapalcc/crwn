import React from 'react'
import { connect } from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import '../Cart/cart.styles.scss'

export const Cart = (props) => {
    return (
        <div className="cart">
            <ShoppingIcon className="cart-icon"/>
            <span className="cart-count">{(props.items_count<10)?(`0${props.items_count}`):(props.items_count)}</span>
        </div>
    )
}

function mapStateToProps(state){
    return{
        items_count: state.cart.items.reduce((total_count, item)=> (total_count + item.quantity), 0)
    }
}

export default connect(mapStateToProps, null)(Cart); 